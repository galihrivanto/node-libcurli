/**
 * Copyright (c) Jonathan Cardoso Machado. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @public
 */
export declare enum CurlMultiCode {
    CURLM_CALL_MULTI_PERFORM = -1,
    CURLM_OK = 0,
    CURLM_BAD_HANDLE = 1,
    CURLM_BAD_EASY_HANDLE = 2,
    CURLM_OUT_OF_MEMORY = 3,
    CURLM_INTERNAL_ERROR = 4,
    CURLM_BAD_SOCKET = 5,
    CURLM_UNKNOWN_OPTION = 6,
    CURLM_ADDED_ALREADY = 7,
    CURLM_RECURSIVE_API_CALL = 8,
    CURLM_WAKEUP_FAILURE = 9,
    CURLM_BAD_FUNCTION_ARGUMENT = 10,
    CURLM_LAST = 11,
    CURLM_CALL_MULTI_SOCKET = -1
}
/**
 * @public
 */
export declare enum CurlCode {
    CURLE_OK = 0,
    CURLE_UNSUPPORTED_PROTOCOL = 1,
    CURLE_FAILED_INIT = 2,
    CURLE_URL_MALFORMAT = 3,
    CURLE_NOT_BUILT_IN = 4,
    CURLE_COULDNT_RESOLVE_PROXY = 5,
    CURLE_COULDNT_RESOLVE_HOST = 6,
    CURLE_COULDNT_CONNECT = 7,
    CURLE_WEIRD_SERVER_REPLY = 8,
    CURLE_REMOTE_ACCESS_DENIED = 9,
    CURLE_FTP_ACCEPT_FAILED = 10,
    CURLE_FTP_WEIRD_PASS_REPLY = 11,
    CURLE_FTP_ACCEPT_TIMEOUT = 12,
    CURLE_FTP_WEIRD_PASV_REPLY = 13,
    CURLE_FTP_WEIRD_227_FORMAT = 14,
    CURLE_FTP_CANT_GET_HOST = 15,
    CURLE_HTTP2 = 16,
    CURLE_FTP_COULDNT_SET_TYPE = 17,
    CURLE_PARTIAL_FILE = 18,
    CURLE_FTP_COULDNT_RETR_FILE = 19,
    CURLE_OBSOLETE20 = 20,
    CURLE_QUOTE_ERROR = 21,
    CURLE_HTTP_RETURNED_ERROR = 22,
    CURLE_WRITE_ERROR = 23,
    CURLE_OBSOLETE24 = 24,
    CURLE_UPLOAD_FAILED = 25,
    CURLE_READ_ERROR = 26,
    CURLE_OUT_OF_MEMORY = 27,
    CURLE_OPERATION_TIMEDOUT = 28,
    CURLE_OBSOLETE29 = 29,
    CURLE_FTP_PORT_FAILED = 30,
    CURLE_FTP_COULDNT_USE_REST = 31,
    CURLE_OBSOLETE32 = 32,
    CURLE_RANGE_ERROR = 33,
    CURLE_HTTP_POST_ERROR = 34,
    CURLE_SSL_CONNECT_ERROR = 35,
    CURLE_BAD_DOWNLOAD_RESUME = 36,
    CURLE_FILE_COULDNT_READ_FILE = 37,
    CURLE_LDAP_CANNOT_BIND = 38,
    CURLE_LDAP_SEARCH_FAILED = 39,
    CURLE_OBSOLETE40 = 40,
    CURLE_FUNCTION_NOT_FOUND = 41,
    CURLE_ABORTED_BY_CALLBACK = 42,
    CURLE_BAD_FUNCTION_ARGUMENT = 43,
    CURLE_OBSOLETE44 = 44,
    CURLE_INTERFACE_FAILED = 45,
    CURLE_OBSOLETE46 = 46,
    CURLE_TOO_MANY_REDIRECTS = 47,
    CURLE_UNKNOWN_OPTION = 48,
    CURLE_SETOPT_OPTION_SYNTAX = 49,
    CURLE_OBSOLETE50 = 50,
    CURLE_OBSOLETE51 = 51,
    CURLE_GOT_NOTHING = 52,
    CURLE_SSL_ENGINE_NOTFOUND = 53,
    CURLE_SSL_ENGINE_SETFAILED = 54,
    CURLE_SEND_ERROR = 55,
    CURLE_RECV_ERROR = 56,
    CURLE_OBSOLETE57 = 57,
    CURLE_SSL_CERTPROBLEM = 58,
    CURLE_SSL_CIPHER = 59,
    CURLE_PEER_FAILED_VERIFICATION = 60,
    CURLE_BAD_CONTENT_ENCODING = 61,
    CURLE_LDAP_INVALID_URL = 62,
    CURLE_FILESIZE_EXCEEDED = 63,
    CURLE_USE_SSL_FAILED = 64,
    CURLE_SEND_FAIL_REWIND = 65,
    CURLE_SSL_ENGINE_INITFAILED = 66,
    CURLE_LOGIN_DENIED = 67,
    CURLE_TFTP_NOTFOUND = 68,
    CURLE_TFTP_PERM = 69,
    CURLE_REMOTE_DISK_FULL = 70,
    CURLE_TFTP_ILLEGAL = 71,
    CURLE_TFTP_UNKNOWNID = 72,
    CURLE_REMOTE_FILE_EXISTS = 73,
    CURLE_TFTP_NOSUCHUSER = 74,
    CURLE_CONV_FAILED = 75,
    CURLE_CONV_REQD = 76,
    CURLE_SSL_CACERT_BADFILE = 77,
    CURLE_REMOTE_FILE_NOT_FOUND = 78,
    CURLE_SSH = 79,
    CURLE_SSL_SHUTDOWN_FAILED = 80,
    CURLE_AGAIN = 81,
    CURLE_SSL_CRL_BADFILE = 82,
    CURLE_SSL_ISSUER_ERROR = 83,
    CURLE_FTP_PRET_FAILED = 84,
    CURLE_RTSP_CSEQ_ERROR = 85,
    CURLE_RTSP_SESSION_ERROR = 86,
    CURLE_FTP_BAD_FILE_LIST = 87,
    CURLE_CHUNK_FAILED = 88,
    CURLE_NO_CONNECTION_AVAILABLE = 89,
    CURLE_SSL_PINNEDPUBKEYNOTMATCH = 90,
    CURLE_SSL_INVALIDCERTSTATUS = 91,
    CURLE_HTTP2_STREAM = 92,
    CURLE_RECURSIVE_API_CALL = 93,
    CURLE_AUTH_ERROR = 94,
    CURLE_HTTP3 = 95,
    CURLE_QUIC_CONNECT_ERROR = 96,
    CURLE_PROXY = 97,
    CURLE_SSL_CLIENTCERT = 98,
    CURLE_LAST = 99,
    CURLE_FTP_WEIRD_SERVER_REPLY = 8,
    CURLE_SSL_CACERT = 60,
    CURLE_UNKNOWN_TELNET_OPTION = 48,
    CURLE_SSL_PEER_CERTIFICATE = 60,
    CURLE_TELNET_OPTION_SYNTAX = 49,
    CURLE_FTP_ACCESS_DENIED = 9,
    CURLE_FTP_COULDNT_SET_BINARY = 17,
    CURLE_FTP_QUOTE_ERROR = 21,
    CURLE_TFTP_DISKFULL = 70,
    CURLE_TFTP_EXISTS = 73,
    CURLE_HTTP_RANGE_ERROR = 33,
    CURLE_FTP_SSL_FAILED = 64,
    CURLE_OPERATION_TIMEOUTED = 28,
    CURLE_HTTP_NOT_FOUND = 22,
    CURLE_HTTP_PORT_FAILED = 45,
    CURLE_FTP_COULDNT_STOR_FILE = 25,
    CURLE_FTP_PARTIAL_FILE = 18,
    CURLE_FTP_BAD_DOWNLOAD_RESUME = 36
}
/**
 * @public
 */
export declare enum CurlShareCode {
    CURLSHE_OK = 0,
    CURLSHE_BAD_OPTION = 1,
    CURLSHE_IN_USE = 2,
    CURLSHE_INVALID = 3,
    CURLSHE_NOMEM = 4,
    CURLSHE_NOT_BUILT_IN = 5,
    CURLSHE_LAST = 6
}
