/**
 * Copyright (c) Jonathan Cardoso Machado. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @public
 */
export interface CurlInfo {
    /**
     * The session's active socket.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_ACTIVESOCKET.html](https://curl.haxx.se/libcurl/c/CURLINFO_ACTIVESOCKET.html)
     */
    readonly ACTIVESOCKET: 'ACTIVESOCKET';
    /**
     * Time from start until SSL/SSH handshake completed.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_APPCONNECT_TIME.html](https://curl.haxx.se/libcurl/c/CURLINFO_APPCONNECT_TIME.html)
     */
    readonly APPCONNECT_TIME: 'APPCONNECT_TIME';
    /**
     * Time from start until SSL/SSH handshake completed.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_APPCONNECT_TIME_T.html](https://curl.haxx.se/libcurl/c/CURLINFO_APPCONNECT_TIME_T.html)
     */
    readonly APPCONNECT_TIME_T: 'APPCONNECT_TIME_T';
    /**
     * Get the default value for .
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_CAINFO.html](https://curl.haxx.se/libcurl/c/CURLINFO_CAINFO.html)
     */
    readonly CAINFO: 'CAINFO';
    /**
     * Get the default value for .
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_CAPATH.html](https://curl.haxx.se/libcurl/c/CURLINFO_CAPATH.html)
     */
    readonly CAPATH: 'CAPATH';
    /**
     * Certificate chain.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_CERTINFO.html](https://curl.haxx.se/libcurl/c/CURLINFO_CERTINFO.html)
     */
    readonly CERTINFO: 'CERTINFO';
    /**
     * Whether or not a time conditional was met or 304 HTTP response.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_CONDITION_UNMET.html](https://curl.haxx.se/libcurl/c/CURLINFO_CONDITION_UNMET.html)
     */
    readonly CONDITION_UNMET: 'CONDITION_UNMET';
    /**
     * Time from start until remote host or proxy completed.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_CONNECT_TIME.html](https://curl.haxx.se/libcurl/c/CURLINFO_CONNECT_TIME.html)
     */
    readonly CONNECT_TIME: 'CONNECT_TIME';
    /**
     * Time from start until remote host or proxy completed.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_CONNECT_TIME_T.html](https://curl.haxx.se/libcurl/c/CURLINFO_CONNECT_TIME_T.html)
     */
    readonly CONNECT_TIME_T: 'CONNECT_TIME_T';
    /**
     * (Deprecated) Content length from the Content-Length header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_CONTENT_LENGTH_DOWNLOAD.html](https://curl.haxx.se/libcurl/c/CURLINFO_CONTENT_LENGTH_DOWNLOAD.html)
     */
    readonly CONTENT_LENGTH_DOWNLOAD: 'CONTENT_LENGTH_DOWNLOAD';
    /**
     * Content length from the Content-Length header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_CONTENT_LENGTH_DOWNLOAD_T.html](https://curl.haxx.se/libcurl/c/CURLINFO_CONTENT_LENGTH_DOWNLOAD_T.html)
     */
    readonly CONTENT_LENGTH_DOWNLOAD_T: 'CONTENT_LENGTH_DOWNLOAD_T';
    /**
     * (Deprecated) Upload size.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_CONTENT_LENGTH_UPLOAD.html](https://curl.haxx.se/libcurl/c/CURLINFO_CONTENT_LENGTH_UPLOAD.html)
     */
    readonly CONTENT_LENGTH_UPLOAD: 'CONTENT_LENGTH_UPLOAD';
    /**
     * Upload size.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_CONTENT_LENGTH_UPLOAD_T.html](https://curl.haxx.se/libcurl/c/CURLINFO_CONTENT_LENGTH_UPLOAD_T.html)
     */
    readonly CONTENT_LENGTH_UPLOAD_T: 'CONTENT_LENGTH_UPLOAD_T';
    /**
     * Content type from the Content-Type header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_CONTENT_TYPE.html](https://curl.haxx.se/libcurl/c/CURLINFO_CONTENT_TYPE.html)
     */
    readonly CONTENT_TYPE: 'CONTENT_TYPE';
    /**
     * List of all known cookies.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_COOKIELIST.html](https://curl.haxx.se/libcurl/c/CURLINFO_COOKIELIST.html)
     */
    readonly COOKIELIST: 'COOKIELIST';
    /**
     * Last used HTTP method.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_EFFECTIVE_METHOD.html](https://curl.haxx.se/libcurl/c/CURLINFO_EFFECTIVE_METHOD.html)
     */
    readonly EFFECTIVE_METHOD: 'EFFECTIVE_METHOD';
    /**
     * Last used URL.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_EFFECTIVE_URL.html](https://curl.haxx.se/libcurl/c/CURLINFO_EFFECTIVE_URL.html)
     */
    readonly EFFECTIVE_URL: 'EFFECTIVE_URL';
    /**
     * Remote time of the retrieved document.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_FILETIME.html](https://curl.haxx.se/libcurl/c/CURLINFO_FILETIME.html)
     */
    readonly FILETIME: 'FILETIME';
    /**
     * Remote time of the retrieved document.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_FILETIME_T.html](https://curl.haxx.se/libcurl/c/CURLINFO_FILETIME_T.html)
     */
    readonly FILETIME_T: 'FILETIME_T';
    /**
     * The entry path after logging in to an FTP server.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_FTP_ENTRY_PATH.html](https://curl.haxx.se/libcurl/c/CURLINFO_FTP_ENTRY_PATH.html)
     */
    readonly FTP_ENTRY_PATH: 'FTP_ENTRY_PATH';
    /**
     * Number of bytes of all headers received.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_HEADER_SIZE.html](https://curl.haxx.se/libcurl/c/CURLINFO_HEADER_SIZE.html)
     */
    readonly HEADER_SIZE: 'HEADER_SIZE';
    /**
     * Last proxy CONNECT response code.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_HTTP_CONNECTCODE.html](https://curl.haxx.se/libcurl/c/CURLINFO_HTTP_CONNECTCODE.html)
     */
    readonly HTTP_CONNECTCODE: 'HTTP_CONNECTCODE';
    /**
     * The http version used in the connection.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_HTTP_VERSION.html](https://curl.haxx.se/libcurl/c/CURLINFO_HTTP_VERSION.html)
     */
    readonly HTTP_VERSION: 'HTTP_VERSION';
    /**
     * Available HTTP authentication methods.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_HTTPAUTH_AVAIL.html](https://curl.haxx.se/libcurl/c/CURLINFO_HTTPAUTH_AVAIL.html)
     */
    readonly HTTPAUTH_AVAIL: 'HTTPAUTH_AVAIL';
    /**
     * (Deprecated) Last socket used.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_LASTSOCKET.html](https://curl.haxx.se/libcurl/c/CURLINFO_LASTSOCKET.html)
     */
    readonly LASTSOCKET: 'LASTSOCKET';
    /**
     * Local-end IP address of last connection.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_LOCAL_IP.html](https://curl.haxx.se/libcurl/c/CURLINFO_LOCAL_IP.html)
     */
    readonly LOCAL_IP: 'LOCAL_IP';
    /**
     * Local-end port of last connection.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_LOCAL_PORT.html](https://curl.haxx.se/libcurl/c/CURLINFO_LOCAL_PORT.html)
     */
    readonly LOCAL_PORT: 'LOCAL_PORT';
    /**
     * Time from start until name resolving completed.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_NAMELOOKUP_TIME.html](https://curl.haxx.se/libcurl/c/CURLINFO_NAMELOOKUP_TIME.html)
     */
    readonly NAMELOOKUP_TIME: 'NAMELOOKUP_TIME';
    /**
     * Time from start until name resolving completed.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_NAMELOOKUP_TIME_T.html](https://curl.haxx.se/libcurl/c/CURLINFO_NAMELOOKUP_TIME_T.html)
     */
    readonly NAMELOOKUP_TIME_T: 'NAMELOOKUP_TIME_T';
    /**
     * Number of new successful connections used for previous transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_NUM_CONNECTS.html](https://curl.haxx.se/libcurl/c/CURLINFO_NUM_CONNECTS.html)
     */
    readonly NUM_CONNECTS: 'NUM_CONNECTS';
    /**
     * The errno from the last failure to connect.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_OS_ERRNO.html](https://curl.haxx.se/libcurl/c/CURLINFO_OS_ERRNO.html)
     */
    readonly OS_ERRNO: 'OS_ERRNO';
    /**
     * Time from start until just before the transfer begins.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_PRETRANSFER_TIME.html](https://curl.haxx.se/libcurl/c/CURLINFO_PRETRANSFER_TIME.html)
     */
    readonly PRETRANSFER_TIME: 'PRETRANSFER_TIME';
    /**
     * Time from start until just before the transfer begins.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_PRETRANSFER_TIME_T.html](https://curl.haxx.se/libcurl/c/CURLINFO_PRETRANSFER_TIME_T.html)
     */
    readonly PRETRANSFER_TIME_T: 'PRETRANSFER_TIME_T';
    /**
     * IP address of the last connection.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_PRIMARY_IP.html](https://curl.haxx.se/libcurl/c/CURLINFO_PRIMARY_IP.html)
     */
    readonly PRIMARY_IP: 'PRIMARY_IP';
    /**
     * Port of the last connection.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_PRIMARY_PORT.html](https://curl.haxx.se/libcurl/c/CURLINFO_PRIMARY_PORT.html)
     */
    readonly PRIMARY_PORT: 'PRIMARY_PORT';
    /**
     * User's private data pointer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_PRIVATE.html](https://curl.haxx.se/libcurl/c/CURLINFO_PRIVATE.html)
     */
    readonly PRIVATE: 'PRIVATE';
    /**
     * (Deprecated) The protocol used for the connection. (Added in 7.52.0)
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_PROTOCOL.html](https://curl.haxx.se/libcurl/c/CURLINFO_PROTOCOL.html)
     */
    readonly PROTOCOL: 'PROTOCOL';
    /**
     * Detailed proxy error.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_PROXY_ERROR.html](https://curl.haxx.se/libcurl/c/CURLINFO_PROXY_ERROR.html)
     */
    readonly PROXY_ERROR: 'PROXY_ERROR';
    /**
     * Proxy certificate verification result.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_PROXY_SSL_VERIFYRESULT.html](https://curl.haxx.se/libcurl/c/CURLINFO_PROXY_SSL_VERIFYRESULT.html)
     */
    readonly PROXY_SSL_VERIFYRESULT: 'PROXY_SSL_VERIFYRESULT';
    /**
     * Available HTTP proxy authentication methods.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_PROXYAUTH_AVAIL.html](https://curl.haxx.se/libcurl/c/CURLINFO_PROXYAUTH_AVAIL.html)
     */
    readonly PROXYAUTH_AVAIL: 'PROXYAUTH_AVAIL';
    /**
     * Total number of redirects that were followed.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_REDIRECT_COUNT.html](https://curl.haxx.se/libcurl/c/CURLINFO_REDIRECT_COUNT.html)
     */
    readonly REDIRECT_COUNT: 'REDIRECT_COUNT';
    /**
     * Time taken for all redirect steps before the final transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_REDIRECT_TIME.html](https://curl.haxx.se/libcurl/c/CURLINFO_REDIRECT_TIME.html)
     */
    readonly REDIRECT_TIME: 'REDIRECT_TIME';
    /**
     * Time taken for all redirect steps before the final transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_REDIRECT_TIME_T.html](https://curl.haxx.se/libcurl/c/CURLINFO_REDIRECT_TIME_T.html)
     */
    readonly REDIRECT_TIME_T: 'REDIRECT_TIME_T';
    /**
     * URL a redirect would take you to, had you enabled redirects.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_REDIRECT_URL.html](https://curl.haxx.se/libcurl/c/CURLINFO_REDIRECT_URL.html)
     */
    readonly REDIRECT_URL: 'REDIRECT_URL';
    /**
     * Referrer header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_REFERER.html](https://curl.haxx.se/libcurl/c/CURLINFO_REFERER.html)
     */
    readonly REFERER: 'REFERER';
    /**
     * Number of bytes sent in the issued HTTP requests.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_REQUEST_SIZE.html](https://curl.haxx.se/libcurl/c/CURLINFO_REQUEST_SIZE.html)
     */
    readonly REQUEST_SIZE: 'REQUEST_SIZE';
    /**
     * Last received response code.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_RESPONSE_CODE.html](https://curl.haxx.se/libcurl/c/CURLINFO_RESPONSE_CODE.html)
     */
    readonly RESPONSE_CODE: 'RESPONSE_CODE';
    /**
     * The value from the from the Retry-After header.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_RETRY_AFTER.html](https://curl.haxx.se/libcurl/c/CURLINFO_RETRY_AFTER.html)
     */
    readonly RETRY_AFTER: 'RETRY_AFTER';
    /**
     * RTSP CSeq that will next be used.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_RTSP_CLIENT_CSEQ.html](https://curl.haxx.se/libcurl/c/CURLINFO_RTSP_CLIENT_CSEQ.html)
     */
    readonly RTSP_CLIENT_CSEQ: 'RTSP_CLIENT_CSEQ';
    /**
     * RTSP CSeq last received.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_RTSP_CSEQ_RECV.html](https://curl.haxx.se/libcurl/c/CURLINFO_RTSP_CSEQ_RECV.html)
     */
    readonly RTSP_CSEQ_RECV: 'RTSP_CSEQ_RECV';
    /**
     * RTSP CSeq that will next be expected.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_RTSP_SERVER_CSEQ.html](https://curl.haxx.se/libcurl/c/CURLINFO_RTSP_SERVER_CSEQ.html)
     */
    readonly RTSP_SERVER_CSEQ: 'RTSP_SERVER_CSEQ';
    /**
     * RTSP session ID.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_RTSP_SESSION_ID.html](https://curl.haxx.se/libcurl/c/CURLINFO_RTSP_SESSION_ID.html)
     */
    readonly RTSP_SESSION_ID: 'RTSP_SESSION_ID';
    /**
     * The scheme used for the connection. (Added in 7.52.0)
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_SCHEME.html](https://curl.haxx.se/libcurl/c/CURLINFO_SCHEME.html)
     */
    readonly SCHEME: 'SCHEME';
    /**
     * (Deprecated) Number of bytes downloaded.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_SIZE_DOWNLOAD.html](https://curl.haxx.se/libcurl/c/CURLINFO_SIZE_DOWNLOAD.html)
     */
    readonly SIZE_DOWNLOAD: 'SIZE_DOWNLOAD';
    /**
     * Number of bytes downloaded.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_SIZE_DOWNLOAD_T.html](https://curl.haxx.se/libcurl/c/CURLINFO_SIZE_DOWNLOAD_T.html)
     */
    readonly SIZE_DOWNLOAD_T: 'SIZE_DOWNLOAD_T';
    /**
     * (Deprecated) Number of bytes uploaded.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_SIZE_UPLOAD.html](https://curl.haxx.se/libcurl/c/CURLINFO_SIZE_UPLOAD.html)
     */
    readonly SIZE_UPLOAD: 'SIZE_UPLOAD';
    /**
     * Number of bytes uploaded.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_SIZE_UPLOAD_T.html](https://curl.haxx.se/libcurl/c/CURLINFO_SIZE_UPLOAD_T.html)
     */
    readonly SIZE_UPLOAD_T: 'SIZE_UPLOAD_T';
    /**
     * (Deprecated) Average download speed.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_SPEED_DOWNLOAD.html](https://curl.haxx.se/libcurl/c/CURLINFO_SPEED_DOWNLOAD.html)
     */
    readonly SPEED_DOWNLOAD: 'SPEED_DOWNLOAD';
    /**
     * Average download speed.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_SPEED_DOWNLOAD_T.html](https://curl.haxx.se/libcurl/c/CURLINFO_SPEED_DOWNLOAD_T.html)
     */
    readonly SPEED_DOWNLOAD_T: 'SPEED_DOWNLOAD_T';
    /**
     * (Deprecated) Average upload speed.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_SPEED_UPLOAD.html](https://curl.haxx.se/libcurl/c/CURLINFO_SPEED_UPLOAD.html)
     */
    readonly SPEED_UPLOAD: 'SPEED_UPLOAD';
    /**
     * Average upload speed.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_SPEED_UPLOAD_T.html](https://curl.haxx.se/libcurl/c/CURLINFO_SPEED_UPLOAD_T.html)
     */
    readonly SPEED_UPLOAD_T: 'SPEED_UPLOAD_T';
    /**
     * A list of OpenSSL crypto engines.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_SSL_ENGINES.html](https://curl.haxx.se/libcurl/c/CURLINFO_SSL_ENGINES.html)
     */
    readonly SSL_ENGINES: 'SSL_ENGINES';
    /**
     * Certificate verification result.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_SSL_VERIFYRESULT.html](https://curl.haxx.se/libcurl/c/CURLINFO_SSL_VERIFYRESULT.html)
     */
    readonly SSL_VERIFYRESULT: 'SSL_VERIFYRESULT';
    /**
     * Time from start until just when the first byte is received.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_STARTTRANSFER_TIME.html](https://curl.haxx.se/libcurl/c/CURLINFO_STARTTRANSFER_TIME.html)
     */
    readonly STARTTRANSFER_TIME: 'STARTTRANSFER_TIME';
    /**
     * Time from start until just when the first byte is received.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_STARTTRANSFER_TIME_T.html](https://curl.haxx.se/libcurl/c/CURLINFO_STARTTRANSFER_TIME_T.html)
     */
    readonly STARTTRANSFER_TIME_T: 'STARTTRANSFER_TIME_T';
    /**
     * TLS session info that can be used for further processing. See . Deprecated option, use  instead!
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_TLS_SESSION.html](https://curl.haxx.se/libcurl/c/CURLINFO_TLS_SESSION.html)
     */
    readonly TLS_SESSION: 'TLS_SESSION';
    /**
     * TLS session info that can be used for further processing.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_TLS_SSL_PTR.html](https://curl.haxx.se/libcurl/c/CURLINFO_TLS_SSL_PTR.html)
     */
    readonly TLS_SSL_PTR: 'TLS_SSL_PTR';
    /**
     * Total time of previous transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_TOTAL_TIME.html](https://curl.haxx.se/libcurl/c/CURLINFO_TOTAL_TIME.html)
     */
    readonly TOTAL_TIME: 'TOTAL_TIME';
    /**
     * Total time of previous transfer.
     *
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLINFO_TOTAL_TIME_T.html](https://curl.haxx.se/libcurl/c/CURLINFO_TOTAL_TIME_T.html)
     */
    readonly TOTAL_TIME_T: 'TOTAL_TIME_T';
}
/**
 * @public
 */
export type CurlInfoName = 'ACTIVESOCKET' | 'APPCONNECT_TIME' | 'APPCONNECT_TIME_T' | 'CAINFO' | 'CAPATH' | 'CERTINFO' | 'CONDITION_UNMET' | 'CONNECT_TIME' | 'CONNECT_TIME_T' | 'CONTENT_LENGTH_DOWNLOAD' | 'CONTENT_LENGTH_DOWNLOAD_T' | 'CONTENT_LENGTH_UPLOAD' | 'CONTENT_LENGTH_UPLOAD_T' | 'CONTENT_TYPE' | 'COOKIELIST' | 'EFFECTIVE_METHOD' | 'EFFECTIVE_URL' | 'FILETIME' | 'FILETIME_T' | 'FTP_ENTRY_PATH' | 'HEADER_SIZE' | 'HTTP_CONNECTCODE' | 'HTTP_VERSION' | 'HTTPAUTH_AVAIL' | 'LASTSOCKET' | 'LOCAL_IP' | 'LOCAL_PORT' | 'NAMELOOKUP_TIME' | 'NAMELOOKUP_TIME_T' | 'NUM_CONNECTS' | 'OS_ERRNO' | 'PRETRANSFER_TIME' | 'PRETRANSFER_TIME_T' | 'PRIMARY_IP' | 'PRIMARY_PORT' | 'PRIVATE' | 'PROTOCOL' | 'PROXY_ERROR' | 'PROXY_SSL_VERIFYRESULT' | 'PROXYAUTH_AVAIL' | 'REDIRECT_COUNT' | 'REDIRECT_TIME' | 'REDIRECT_TIME_T' | 'REDIRECT_URL' | 'REFERER' | 'REQUEST_SIZE' | 'RESPONSE_CODE' | 'RETRY_AFTER' | 'RTSP_CLIENT_CSEQ' | 'RTSP_CSEQ_RECV' | 'RTSP_SERVER_CSEQ' | 'RTSP_SESSION_ID' | 'SCHEME' | 'SIZE_DOWNLOAD' | 'SIZE_DOWNLOAD_T' | 'SIZE_UPLOAD' | 'SIZE_UPLOAD_T' | 'SPEED_DOWNLOAD' | 'SPEED_DOWNLOAD_T' | 'SPEED_UPLOAD' | 'SPEED_UPLOAD_T' | 'SSL_ENGINES' | 'SSL_VERIFYRESULT' | 'STARTTRANSFER_TIME' | 'STARTTRANSFER_TIME_T' | 'TLS_SESSION' | 'TLS_SSL_PTR' | 'TOTAL_TIME' | 'TOTAL_TIME_T';