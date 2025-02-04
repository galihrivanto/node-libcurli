/**
 * Copyright (c) Jonathan Cardoso Machado. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Readable } from 'stream'

import {
  CurlOptionName,
  CurlOptionCamelCaseMap,
} from '../generated/CurlOption'

import { HeaderInfo } from '../util/parseHeaders'

import { Curl } from './Curl'
import { CurlFeature } from '../enum/CurlFeature'
import {
  CurlyFunction,
  CurlyOptions,
  CurlyResponseBodyParser,
  CurlyResult,
  defaultResponseBodyParsers,
  methods
} from '../shared/curly'


export const create = (defaultOptions: CurlyOptions = {}): CurlyFunction => {
  function curly<ResultData>(
    url: string,
    options: CurlyOptions = {},
  ): Promise<CurlyResult<ResultData>> {
    const curlHandle = new Curl()

    curlHandle.enable(CurlFeature.NoDataParsing)

    curlHandle.setOpt('URL', `${options.curlyBaseUrl || ''}${url}`)

    // headers should be merged not overwritten
    const header = [
      ...(defaultOptions.httpHeader || []),
      ...(defaultOptions.HTTPHEADER || []),
      ...(options.httpHeader || []),
    ]

    const finalOptions = {
      ...defaultOptions,
      // remove httpHeader from options
      ...Object.fromEntries(Object.entries(options).filter(([key]) => key !== 'httpHeader')),
      HTTPHEADER: header,
    }

    for (const key of Object.keys(finalOptions)) {
      const keyTyped = key as keyof CurlyOptions

      const optionName: CurlOptionName =
        keyTyped in CurlOptionCamelCaseMap
          ? CurlOptionCamelCaseMap[
              keyTyped as keyof typeof CurlOptionCamelCaseMap
            ]
          : (keyTyped as CurlOptionName)

      // if it begins with curly we do not set it on the curlHandle
      // as it's an specific option for curly
      if (optionName.startsWith('curly') || !finalOptions[keyTyped]) continue

      // @ts-ignore @TODO Try to type this
      curlHandle.setOpt(optionName, finalOptions[keyTyped])
    }

    // streams!
    const {
      curlyStreamResponse,
      curlyStreamResponseHighWaterMark,
      curlyStreamUpload,
    } = finalOptions
    const isUsingStream = !!(curlyStreamResponse || curlyStreamUpload)

    if (finalOptions.curlyProgressCallback) {
      if (typeof finalOptions.curlyProgressCallback !== 'function') {
        throw new TypeError(
          'curlyProgressCallback must be a function with signature (number, number, number, number) => number',
        )
      }

      const fnToCall = isUsingStream
        ? 'setStreamProgressCallback'
        : 'setProgressCallback'

      curlHandle[fnToCall](finalOptions.curlyProgressCallback)
    }

    if (curlyStreamResponse) {
      curlHandle.enable(CurlFeature.StreamResponse)

      if (curlyStreamResponseHighWaterMark) {
        curlHandle.setStreamResponseHighWaterMark(
          curlyStreamResponseHighWaterMark,
        )
      }
    }

    if (curlyStreamUpload) {
      curlHandle.setUploadStream(curlyStreamUpload)
    }

    const lowerCaseHeadersIfNecessary = (headers: HeaderInfo[]) => {
      // in-place modification
      // yeah, I know mutability is bad and all that
      if (finalOptions.curlyLowerCaseHeaders) {
        for (const headersReq of headers) {
          const entries = Object.entries(headersReq)
          for (const [headerKey, headerValue] of entries) {
            delete headersReq[headerKey]
            // @ts-expect-error ignoring this for now
            headersReq[headerKey.toLowerCase()] = headerValue
          }
        }
      }
    }

    return new Promise((resolve, reject) => {
      let stream: Readable

      if (curlyStreamResponse) {
        curlHandle.on(
          'stream',
          (_stream, statusCode, headers: HeaderInfo[]) => {
            lowerCaseHeadersIfNecessary(headers)

            stream = _stream

            resolve({
              // @ts-ignore cannot be subtype yada yada
              data: stream,
              statusCode,
              headers,
            })
          },
        )
      }

      curlHandle.on(
        'end',
        (statusCode, data: Buffer, headers: HeaderInfo[]) => {
          curlHandle.close()

          // only need to the remaining here if we did not enabled
          // the stream response
          if (curlyStreamResponse) {
            return
          }

          const contentTypeEntry = Object.entries(
            headers[headers.length - 1],
          ).find(([k]) => k.toLowerCase() === 'content-type')

          let contentType = (
            contentTypeEntry ? contentTypeEntry[1] : ''
          ) as string

          // remove the metadata of the content-type, like charset
          // See https://tools.ietf.org/html/rfc7231#section-3.1.1.5
          contentType = contentType.split(';')[0]

          const responseBodyParsers = {
            ...curly.defaultResponseBodyParsers,
            ...finalOptions.curlyResponseBodyParsers,
          }

          let foundParser = finalOptions.curlyResponseBodyParser

          if (typeof foundParser === 'undefined') {
            for (const [contentTypeFormat, parser] of Object.entries(
              responseBodyParsers,
            )) {
              if (typeof parser !== 'function') {
                return reject(
                  new TypeError(
                    `Response body parser for ${contentTypeFormat} must be a function`,
                  ),
                )
              }
              if (contentType === contentTypeFormat) {
                foundParser = parser as CurlyResponseBodyParser
                break
              } else if (contentTypeFormat === '*') {
                foundParser = parser as CurlyResponseBodyParser
                break
              } else {
                const partsFormat = contentTypeFormat.split('/')
                const partsContentType = contentType.split('/')

                if (
                  partsContentType.length === partsFormat.length &&
                  partsContentType.every(
                    (val, index) =>
                      partsFormat[index] === '*' || partsFormat[index] === val,
                  )
                ) {
                  foundParser = parser as CurlyResponseBodyParser
                  break
                }
              }
            }
          }

          if (foundParser && typeof foundParser !== 'function') {
            return reject(
              new TypeError(
                '`curlyResponseBodyParser` passed to curly must be false or a function.',
              ),
            )
          }

          lowerCaseHeadersIfNecessary(headers)

          try {
            resolve({
              statusCode: statusCode,
              data: foundParser ? foundParser(data, headers) : data,
              headers: headers,
            })
          } catch (error) {
            reject(error)
          }
        },
      )

      curlHandle.on('error', (error, errorCode) => {
        curlHandle.close()

        // @ts-ignore
        error.code = errorCode
        // @ts-ignore
        error.isCurlError = true

        // oops, if have a stream it means the promise
        // has been resolved with it
        // so instead of rejecting the original promise
        // we are emitting the error event on the stream
        if (stream) {
          stream.emit('error', error)
        } else {
          reject(error)
        }
      })

      try {
        curlHandle.perform()
      } catch (error) /* istanbul ignore next: this should never happen 🤷‍♂️ */ {
        curlHandle.close()
        reject(error)
      }
    })
  }

  curly.create = create

  curly.defaultResponseBodyParsers = defaultResponseBodyParsers

  const httpMethodOptionsMap: Record<
    string,
    null | ((m: string, o: CurlyOptions) => CurlyOptions)
  > = {
    get: null,
    post: (_m, o) => ({
      post: true,
      ...o,
    }),
    head: (_m, o) => ({
      nobody: true,
      ...o,
    }),
    _: (m, o) => ({
      customRequest: m.toUpperCase(),
      ...o,
    }),
  }

  for (const httpMethod of methods) {
    const httpMethodOptionsKey = Object.prototype.hasOwnProperty.call(
      httpMethodOptionsMap,
      httpMethod,
    )
      ? httpMethod
      : '_'
    const httpMethodOptions = httpMethodOptionsMap[httpMethodOptionsKey]

    // @ts-ignore
    curly[httpMethod] =
      httpMethodOptions === null
        ? curly
        : (url: string, options: CurlyOptions = {}) =>
            curly(url, {
              ...httpMethodOptions(httpMethod, options),
            })
  }

  // @ts-ignore
  return curly
}

/**
 * Curly function
 *
 * @public
 */
export const curly = create()
