const fs = require('fs')
const path = require('path')
const { inspect } = require('util')
const { execSync } = require('child_process')

const { optionKindMap, optionKindValueMap } = require('./data/options')

const {
  createConstantsFile,
  getDescriptionCommentForOption,
} = require('./utils/createConstantsFile')
const { createSetOptOverloads } = require('./utils/createSetOptOverloads')
const { curlOptionsBlacklist } = require('./utils/curlOptionsBlacklist')
const { multiOptionsBlacklist } = require('./utils/multiOptionsBlacklist')
const { retrieveConstantList } = require('./utils/retrieveConstantList')

const run = async () => {
  const curlOptionsFilePath = path.resolve(
    __dirname,
    '../lib/generated/CurlOption.ts',
  )

  const curlInfoFilePath = path.resolve(
    __dirname,
    '../lib/generated/CurlInfo.ts',
  )

  const multiOptionFilePath = path.resolve(
    __dirname,
    '../lib/generated/MultiOption.ts',
  )

  const allowedCurlOptions = await retrieveConstantList({
    url: 'https://curl.se/libcurl/c/curl_easy_setopt.html',
    constantPrefix: 'CURLOPT_',
    blacklist: curlOptionsBlacklist,
  })

  const curlImpersonateOptions = [
    {
      constantOriginal: 'CURLOPT_SSL_SIG_HASH_ALGS',
      constantName: 'SSL_SIG_HASH_ALGS',
      constantNameCamelCase: 'sslSigHashAlgs',
      description: '(curl-impersonate) Enable ALPN',
      url:
        'https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L119',
    },
    {
      constantOriginal: 'CURLOPT_SSL_ENABLE_ALPS',
      constantName: 'SSL_ENABLE_ALPS',
      constantNameCamelCase: 'sslEnableAlps',
      description: '(curl-impersonate) TLS Client hello match Extension',
      url:
        'https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L119',
    },
    {
      constantOriginal: 'CURLOPT_SSL_CERT_COMPRESSION',
      constantName: 'SSL_COMPRESSION',
      constantNameCamelCase: 'sslCompression',
      description: '(curl-impersonate) SSL Compression type. Eg. brotli',
      url:
        'https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#110',
    },
    {
      constantOriginal: 'CURLOPT_SSL_ENABLE_TICKET',
      constantName: 'SSL_ENABLE_TICKET',
      constantNameCamelCase: 'sslEnableTicket',
      description: 'Enable/disable TLS session ticket extension (RFC5077)',
      url: 'https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L112',
    },
    {
      constantOriginal: 'CURLOPT_HTTP2_PSEUDO_HEADERS_ORDER',
      constantName: 'HTTP2_PSEUDO_HEADERS_ORDER',
      constantNameCamelCase: 'http2PseudoHeadersOrder',
      description: 'Set the order of the HTTP/2 pseudo headers',
      url: 'https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L124',
    },
    {
      constantOriginal: 'CURLOPT_HTTP2_NO_SERVER_PUSH',
      constantName: 'HTTP2_NO_SERVER_PUSH',
      constantNameCamelCase: 'http2NoServerPush',
      description: 'Disable HTTP2 server push in the HTTP2 SETTINGS',
      url: 'https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L128',
    },
    {
      constantOriginal: 'CURLOPT_SSL_PERMUTE_EXTENSIONS',
      constantName: 'SSL_PERMUTE_EXTENSIONS',
      constantNameCamelCase: 'sslPermuteExtensions',
      description: 'Enable Boringssl permute extensions',
      url: 'https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L132',
    },
  ]


  // Extra options for curl-impersonate
  allowedCurlOptions.push(...curlImpersonateOptions)

  await createConstantsFile({
    constants: allowedCurlOptions,
    variableName: 'CurlOption',
    filePath: curlOptionsFilePath,
    shouldGenerateCamelCaseMap: true,
    extraHeaderText: `
      import { CurlChunk } from '../enum/CurlChunk'
      import { CurlFnMatchFunc } from '../enum/CurlFnMatchFunc'
      import { CurlFtpMethod } from '../enum/CurlFtpMethod'
      import { CurlFtpSsl } from '../enum/CurlFtpSsl'
      import { CurlGssApi } from '../enum/CurlGssApi'
      import { CurlHeader } from '../enum/CurlHeader'
      import { CurlHsts, CurlHstsCacheCount, CurlHstsCacheEntry } from '../enum/CurlHsts'
      import { CurlHttpVersion } from '../enum/CurlHttpVersion'
      import { CurlInfoDebug } from '../enum/CurlInfoDebug'
      import { CurlIpResolve } from '../enum/CurlIpResolve'
      import { CurlNetrc } from '../enum/CurlNetrc'
      import { CurlPreReqFunc } from '../enum/CurlPreReqFunc'
      import { CurlProgressFunc } from '../enum/CurlProgressFunc'
      import { CurlProtocol } from '../enum/CurlProtocol'
      import { CurlProxy } from '../enum/CurlProxy'
      import { CurlRtspRequest } from '../enum/CurlRtspRequest'
      import { CurlSshAuth } from '../enum/CurlSshAuth'
      import { CurlSslOpt } from '../enum/CurlSslOpt'
      import { CurlSslVersion } from '../enum/CurlSslVersion'
      import { CurlTimeCond } from '../enum/CurlTimeCond'
      import { CurlUseSsl } from '../enum/CurlUseSsl'
      import { EasyNativeBinding } from "../types/EasyNativeBinding"
      import { Share } from "../Share"
    `,
  })

  const allowedCurlInfos = await retrieveConstantList({
    url: 'https://curl.se/libcurl/c/curl_easy_getinfo.html',
    constantPrefix: 'CURLINFO_',
    blacklist: [
      // time constants at the bottom
      'NAMELOOKUP',
      'CONNECT',
      'APPCONNECT',
      'PRETRANSFER',
      'STARTTRANSFER',
      'TOTAL',
      'REDIRECT',
    ],
  })
  await createConstantsFile({
    constants: allowedCurlInfos,
    variableName: 'CurlInfo',
    filePath: curlInfoFilePath,
  })

  const allowedMultiOptions = await retrieveConstantList({
    url: 'https://curl.se/libcurl/c/curl_multi_setopt.html',
    constantPrefix: 'CURLMOPT_',
    blacklist: multiOptionsBlacklist,
  })
  await createConstantsFile({
    constants: allowedMultiOptions,
    variableName: 'MultiOption',
    filePath: multiOptionFilePath,
  })

  // add extra types to CurlOption
  const union = (arr) => arr.map((i) => inspect(i)).join(' | ')

  let optionsValueTypeData = [
    'import { FileInfo, HttpPostField } from "../types"',
    `export type DataCallbackOptions = ${union(optionKindMap.dataCallback)}`,
    `export type ProgressCallbackOptions = ${union(
      optionKindMap.progressCallback,
    )}`,
    `export type StringListOptions = ${union(optionKindMap.stringList)}`,
    `export type BlobOptions = ${union(optionKindMap.blob)}`,
    `export type SpecificOptions = DataCallbackOptions | ProgressCallbackOptions | StringListOptions | BlobOptions | ${union(
      optionKindMap.other,
    )}`,
  ]

  // Now we must create the type for the curl.<http-verb> options param
  optionsValueTypeData = [
    ...optionsValueTypeData,
    `
    /**
     * @public
     */
    export type CurlOptionValueType = {`,
  ]

  for (const option of allowedCurlOptions) {
    const optionDescription = getDescriptionCommentForOption(option)

    const optionValueType =
      Object.entries(optionKindMap).reduce((acc, [kind, kindOptions]) => {
        if (acc) return acc

        return (
          kindOptions.includes(option.constantName) &&
          (optionKindValueMap[kind] || optionKindValueMap[option.constantName])
        )
      }, null) || optionKindValueMap._

    optionsValueTypeData = [
      ...optionsValueTypeData,
      `${optionDescription}${option.constantName}?: ${optionValueType} | null`,
      `${optionDescription}${option.constantNameCamelCase}?: ${optionValueType} | null`,
    ]
  }

  optionsValueTypeData = [...optionsValueTypeData, '}']

  fs.writeFileSync(curlOptionsFilePath, optionsValueTypeData.join('\n'), {
    flag: 'a+',
  })

  const easyBindingFilePath = path.resolve(
    __dirname,
    '../lib/types/EasyNativeBinding.ts',
  )
  const curlClassFilePaths = [
    path.resolve(__dirname, '../lib/ff/Curl.ts'),
    path.resolve(__dirname, '../lib/chrome/Curl.ts')
  ]

  createSetOptOverloads(easyBindingFilePath)
  curlClassFilePaths.forEach((classPath) => {
    createSetOptOverloads(classPath, 'this')
  })

  execSync(
    `yarn prettier ${curlOptionsFilePath} ${curlInfoFilePath} ${multiOptionFilePath} ${easyBindingFilePath} ${curlClassFilePaths.join(' ')}`,
  )
}

run()
