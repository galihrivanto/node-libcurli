import { setBrowser } from '../binding';
import { CurlyFunction, CurlyOptions, create as createCurly } from '../curly';

enum Browser {
    Chrome99 = 'chrome99',
    Chrome99_Android = 'chrome99_android',
    Chrome100 = 'chrome100',
    Chrome101 = 'chrome101',
    Chrome104 = 'chrome104',
    Chrome107 = 'chrome107',
    Chrome110 = 'chrome110',
    Chrome116 = 'chrome116',
    Edge99 = 'edge99',
    Edge101 = 'edge101',
    Firefox91ESR = 'ff91esr',
    Firefox95 = 'ff95',
    Firefox98 = 'ff98',
    Firefox100 = 'ff100',
    Firefox102 = 'ff102',
    Firefox109 = 'ff109',
    Firefox117 = 'ff117',
    Safari15_3 = 'safari15_3',
    Safari15_5 = 'safari15_5'
}

interface BrowserConfig {
    headers: Record<string, string>;
    tlsVersion?: string;
    ciphers?: string;
    compressed?: boolean;
    http2?: boolean;
    alps?: boolean;
    certCompression?: string;
    http2NoServerPush?: boolean;
    tlsPermuteExtensions?: boolean;
    curves?: string;
    signatureHashes?: string;
    noTlsSessionTicket?: boolean;
    http2PseudoHeadersOrder?: string;
}

const BROWSER_CONFIGS: Record<Browser, BrowserConfig> = {
    [Browser.Chrome99]: {
        headers: {
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-User': '?1',
            'Sec-Fetch-Dest': 'document',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9'
        },
        tlsVersion: '1.2',
        ciphers: 'TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256,ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-RSA-AES256-GCM-SHA384,ECDHE-ECDSA-CHACHA20-POLY1305,ECDHE-RSA-CHACHA20-POLY1305,ECDHE-RSA-AES128-SHA,ECDHE-RSA-AES256-SHA,AES128-GCM-SHA256,AES256-GCM-SHA384,AES128-SHA,AES256-SHA',
        compressed: true,
        http2: true,
        alps: true,
        certCompression: 'brotli'
    },
    [Browser.Chrome99_Android]: {
        headers: {
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': '"Android"',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 12; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.58 Mobile Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-User': '?1',
            'Sec-Fetch-Dest': 'document',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9'
        },
        // ... same TLS config as Chrome99
        tlsVersion: '1.2',
        ciphers: 'TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256,ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-RSA-AES256-GCM-SHA384,ECDHE-ECDSA-CHACHA20-POLY1305,ECDHE-RSA-CHACHA20-POLY1305,ECDHE-RSA-AES128-SHA,ECDHE-RSA-AES256-SHA,AES128-GCM-SHA256,AES256-GCM-SHA384,AES128-SHA,AES256-SHA',
        compressed: true,
        http2: true,
        alps: true,
        certCompression: 'brotli'
    },
    [Browser.Chrome100]: {
        headers: {
            'sec-ch-ua': '"Google Chrome";v="100", "Chromium";v="100", "Not=A?Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-User': '?1',
            'Sec-Fetch-Dest': 'document',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9'
        },
        tlsVersion: '1.2',
        ciphers: 'TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256,ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-RSA-AES256-GCM-SHA384,ECDHE-ECDSA-CHACHA20-POLY1305,ECDHE-RSA-CHACHA20-POLY1305,ECDHE-RSA-AES128-SHA,ECDHE-RSA-AES256-SHA,AES128-GCM-SHA256,AES256-GCM-SHA384,AES128-SHA,AES256-SHA',
        compressed: true,
        http2: true,
        http2NoServerPush: true,
        alps: true,
        certCompression: 'brotli'
    },
    [Browser.Chrome101]: {
        headers: {
            'sec-ch-ua': '"Google Chrome";v="101", "Chromium";v="101", "Not=A?Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-User': '?1',
            'Sec-Fetch-Dest': 'document',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9'
        },
        tlsVersion: '1.2',
        ciphers: 'TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256,ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-RSA-AES256-GCM-SHA384,ECDHE-ECDSA-CHACHA20-POLY1305,ECDHE-RSA-CHACHA20-POLY1305,ECDHE-RSA-AES128-SHA,ECDHE-RSA-AES256-SHA,AES128-GCM-SHA256,AES256-GCM-SHA384,AES128-SHA,AES256-SHA',
        compressed: true,
        http2: true,
        http2NoServerPush: true,
        alps: true,
        certCompression: 'brotli'
    },
    [Browser.Chrome104]: {
        headers: {
            'sec-ch-ua': '"Google Chrome";v="104", "Chromium";v="104", "Not=A?Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-User': '?1',
            'Sec-Fetch-Dest': 'document',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9'
        },
        tlsVersion: '1.2',
        ciphers: 'TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256,ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-RSA-AES256-GCM-SHA384,ECDHE-ECDSA-CHACHA20-POLY1305,ECDHE-RSA-CHACHA20-POLY1305,ECDHE-RSA-AES128-SHA,ECDHE-RSA-AES256-SHA,AES128-GCM-SHA256,AES256-GCM-SHA384,AES128-SHA,AES256-SHA',
        compressed: true,
        http2: true,
        http2NoServerPush: true,
        alps: true,
        certCompression: 'brotli'
    },
    [Browser.Chrome107]: {
        headers: {
            'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-User': '?1',
            'Sec-Fetch-Dest': 'document',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9'
        },
        tlsVersion: '1.2',
        ciphers: 'TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256,ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-RSA-AES256-GCM-SHA384,ECDHE-ECDSA-CHACHA20-POLY1305,ECDHE-RSA-CHACHA20-POLY1305,ECDHE-RSA-AES128-SHA,ECDHE-RSA-AES256-SHA,AES128-GCM-SHA256,AES256-GCM-SHA384,AES128-SHA,AES256-SHA',
        compressed: true,
        http2: true,
        http2NoServerPush: true,
        alps: true,
        certCompression: 'brotli'
    },
    [Browser.Chrome110]: {
        headers: {
            'sec-ch-ua': '"Google Chrome";v="110", "Chromium";v="110", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-User': '?1',
            'Sec-Fetch-Dest': 'document',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9'
        },
        tlsVersion: '1.2',
        ciphers: 'TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256,ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-RSA-AES256-GCM-SHA384,ECDHE-ECDSA-CHACHA20-POLY1305,ECDHE-RSA-CHACHA20-POLY1305,ECDHE-RSA-AES128-SHA,ECDHE-RSA-AES256-SHA,AES128-GCM-SHA256,AES256-GCM-SHA384,AES128-SHA,AES256-SHA',
        compressed: true,
        http2: true,
        http2NoServerPush: true,
        alps: true,
        certCompression: 'brotli'
    },
    [Browser.Chrome116]: {
        headers: {
            'sec-ch-ua': '"Google Chrome";v="116", "Chromium";v="116", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-User': '?1',
            'Sec-Fetch-Dest': 'document',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9'
        },
        tlsVersion: '1.2',
        ciphers: 'TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256,ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-RSA-AES256-GCM-SHA384,ECDHE-ECDSA-CHACHA20-POLY1305,ECDHE-RSA-CHACHA20-POLY1305,ECDHE-RSA-AES128-SHA,ECDHE-RSA-AES256-SHA,AES128-GCM-SHA256,AES256-GCM-SHA384,AES128-SHA,AES256-SHA',
        compressed: true,
        http2: true,
        http2NoServerPush: true,
        alps: true,
        certCompression: 'brotli'
    },
    [Browser.Edge99]: {
        headers: {
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Microsoft Edge";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36 Edg/99.0.1150.30',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-User': '?1',
            'Sec-Fetch-Dest': 'document',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9'
        },
        tlsVersion: '1.2',
        ciphers: 'TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256,ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-RSA-AES256-GCM-SHA384,ECDHE-ECDSA-CHACHA20-POLY1305,ECDHE-RSA-CHACHA20-POLY1305,ECDHE-RSA-AES128-SHA,ECDHE-RSA-AES256-SHA,AES128-GCM-SHA256,AES256-GCM-SHA384,AES128-SHA,AES256-SHA',
        compressed: true,
        http2: true,
        alps: true,
        certCompression: 'brotli'
    },
    [Browser.Edge101]: {
        headers: {
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Microsoft Edge";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36 Edg/101.0.1210.47',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-User': '?1',
            'Sec-Fetch-Dest': 'document',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9'
        },
        tlsVersion: '1.2',
        ciphers: 'TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256,ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-RSA-AES256-GCM-SHA384,ECDHE-ECDSA-CHACHA20-POLY1305,ECDHE-RSA-CHACHA20-POLY1305,ECDHE-RSA-AES128-SHA,ECDHE-RSA-AES256-SHA,AES128-GCM-SHA256,AES256-GCM-SHA384,AES128-SHA,AES256-SHA',
        compressed: true,
        http2: true,
        alps: true,
        certCompression: 'brotli'
    },

    [Browser.Firefox91ESR]: {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/117.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate, br',
            'Upgrade-Insecure-Requests': '1',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-User': '?1',
            'TE': 'trailers'
        },
        ciphers: 'aes_128_gcm_sha_256,chacha20_poly1305_sha_256,aes_256_gcm_sha_384,ecdhe_ecdsa_aes_128_gcm_sha_256,ecdhe_rsa_aes_128_gcm_sha_256,ecdhe_ecdsa_chacha20_poly1305_sha_256,ecdhe_rsa_chacha20_poly1305_sha_256,ecdhe_ecdsa_aes_256_gcm_sha_384,ecdhe_rsa_aes_256_gcm_sha_384,ecdhe_ecdsa_aes_256_sha,ecdhe_ecdsa_aes_128_sha,ecdhe_rsa_aes_128_sha,ecdhe_rsa_aes_256_sha,rsa_aes_128_gcm_sha_256,rsa_aes_256_gcm_sha_384,rsa_aes_128_sha,rsa_aes_256_sha,rsa_3des_ede_cbc_sha',
        http2: true,
        compressed: true
    },

    [Browser.Firefox95]: {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:95.0) Gecko/20100101 Firefox/95.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate, br',
            'Upgrade-Insecure-Requests': '1',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-User': '?1',
            'TE': 'trailers'
        },
        ciphers: 'aes_128_gcm_sha_256,chacha20_poly1305_sha_256,aes_256_gcm_sha_384,ecdhe_ecdsa_aes_128_gcm_sha_256,ecdhe_rsa_aes_128_gcm_sha_256,ecdhe_ecdsa_chacha20_poly1305_sha_256,ecdhe_rsa_chacha20_poly1305_sha_256,ecdhe_ecdsa_aes_256_gcm_sha_384,ecdhe_rsa_aes_256_gcm_sha_384,ecdhe_ecdsa_aes_256_sha,ecdhe_ecdsa_aes_128_sha,ecdhe_rsa_aes_128_sha,ecdhe_rsa_aes_256_sha,rsa_aes_128_gcm_sha_256,rsa_aes_256_gcm_sha_384,rsa_aes_128_sha,rsa_aes_256_sha',
        http2: true,
        compressed: true
    },

    [Browser.Firefox98]: {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate, br',
            'Upgrade-Insecure-Requests': '1',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-User': '?1',
            'TE': 'trailers'
        },
        ciphers: 'aes_128_gcm_sha_256,chacha20_poly1305_sha_256,aes_256_gcm_sha_384,ecdhe_ecdsa_aes_128_gcm_sha_256,ecdhe_rsa_aes_128_gcm_sha_256,ecdhe_ecdsa_chacha20_poly1305_sha_256,ecdhe_rsa_chacha20_poly1305_sha_256,ecdhe_ecdsa_aes_256_gcm_sha_384,ecdhe_rsa_aes_256_gcm_sha_384,ecdhe_ecdsa_aes_256_sha,ecdhe_ecdsa_aes_128_sha,ecdhe_rsa_aes_128_sha,ecdhe_rsa_aes_256_sha,rsa_aes_128_gcm_sha_256,rsa_aes_256_gcm_sha_384,rsa_aes_128_sha,rsa_aes_256_sha',
        http2: true,
        compressed: true
    },

    [Browser.Firefox100]: {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:100.0) Gecko/20100101 Firefox/100.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate, br',
            'Upgrade-Insecure-Requests': '1',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-User': '?1',
            'TE': 'trailers'
        },
        ciphers: 'aes_128_gcm_sha_256,chacha20_poly1305_sha_256,aes_256_gcm_sha_384,ecdhe_ecdsa_aes_128_gcm_sha_256,ecdhe_rsa_aes_128_gcm_sha_256,ecdhe_ecdsa_chacha20_poly1305_sha_256,ecdhe_rsa_chacha20_poly1305_sha_256,ecdhe_ecdsa_aes_256_gcm_sha_384,ecdhe_rsa_aes_256_gcm_sha_384,ecdhe_ecdsa_aes_256_sha,ecdhe_ecdsa_aes_128_sha,ecdhe_rsa_aes_128_sha,ecdhe_rsa_aes_256_sha,rsa_aes_128_gcm_sha_256,rsa_aes_256_gcm_sha_384,rsa_aes_128_sha,rsa_aes_256_sha',
        http2: true,
        compressed: true
    },

    [Browser.Firefox102]: {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate, br',
            'Upgrade-Insecure-Requests': '1',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-User': '?1',
            'TE': 'trailers'
        },
        ciphers: 'aes_128_gcm_sha_256,chacha20_poly1305_sha_256,aes_256_gcm_sha_384,ecdhe_ecdsa_aes_128_gcm_sha_256,ecdhe_rsa_aes_128_gcm_sha_256,ecdhe_ecdsa_chacha20_poly1305_sha_256,ecdhe_rsa_chacha20_poly1305_sha_256,ecdhe_ecdsa_aes_256_gcm_sha_384,ecdhe_rsa_aes_256_gcm_sha_384,ecdhe_ecdsa_aes_256_sha,ecdhe_ecdsa_aes_128_sha,ecdhe_rsa_aes_128_sha,ecdhe_rsa_aes_256_sha,rsa_aes_128_gcm_sha_256,rsa_aes_256_gcm_sha_384,rsa_aes_128_sha,rsa_aes_256_sha',
        http2: true,
        compressed: true
    },

    [Browser.Firefox109]: {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate, br',
            'Upgrade-Insecure-Requests': '1',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-User': '?1',
            'TE': 'trailers'
        },
        ciphers: 'aes_128_gcm_sha_256,chacha20_poly1305_sha_256,aes_256_gcm_sha_384,ecdhe_ecdsa_aes_128_gcm_sha_256,ecdhe_rsa_aes_128_gcm_sha_256,ecdhe_ecdsa_chacha20_poly1305_sha_256,ecdhe_rsa_chacha20_poly1305_sha_256,ecdhe_ecdsa_aes_256_gcm_sha_384,ecdhe_rsa_aes_256_gcm_sha_384,ecdhe_ecdsa_aes_256_sha,ecdhe_ecdsa_aes_128_sha,ecdhe_rsa_aes_128_sha,ecdhe_rsa_aes_256_sha,rsa_aes_128_gcm_sha_256,rsa_aes_256_gcm_sha_384,rsa_aes_128_sha,rsa_aes_256_sha',
        http2: true,
        compressed: true
    },

    [Browser.Firefox117]: {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/117.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate, br',
            'Upgrade-Insecure-Requests': '1',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-User': '?1',
            'TE': 'trailers'
        },
        ciphers: 'aes_128_gcm_sha_256,chacha20_poly1305_sha_256,aes_256_gcm_sha_384,ecdhe_ecdsa_aes_128_gcm_sha_256,ecdhe_rsa_aes_128_gcm_sha_256,ecdhe_ecdsa_chacha20_poly1305_sha_256,ecdhe_rsa_chacha20_poly1305_sha_256,ecdhe_ecdsa_aes_256_gcm_sha_384,ecdhe_rsa_aes_256_gcm_sha_384,ecdhe_ecdsa_aes_256_sha,ecdhe_ecdsa_aes_128_sha,ecdhe_rsa_aes_128_sha,ecdhe_rsa_aes_256_sha,rsa_aes_128_gcm_sha_256,rsa_aes_256_gcm_sha_384,rsa_aes_128_sha,rsa_aes_256_sha',
        http2: true,
        compressed: true
    },

    [Browser.Safari15_3]: {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-us',
            'Accept-Encoding': 'gzip, deflate, br'
        },
        ciphers: 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384:TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256:TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256:TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384:TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256:TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256:TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384:TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256:TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA:TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA:TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384:TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256:TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA:TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA:TLS_RSA_WITH_AES_256_GCM_SHA384:TLS_RSA_WITH_AES_128_GCM_SHA256:TLS_RSA_WITH_AES_256_CBC_SHA256:TLS_RSA_WITH_AES_128_CBC_SHA256:TLS_RSA_WITH_AES_256_CBC_SHA:TLS_RSA_WITH_AES_128_CBC_SHA:TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA:TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA:TLS_RSA_WITH_3DES_EDE_CBC_SHA',
        curves: 'X25519:P-256:P-384:P-521',
        signatureHashes: 'ecdsa_secp256r1_sha256,rsa_pss_rsae_sha256,rsa_pkcs1_sha256,ecdsa_secp384r1_sha384,ecdsa_sha1,rsa_pss_rsae_sha384,rsa_pss_rsae_sha384,rsa_pkcs1_sha384,rsa_pss_rsae_sha512,rsa_pkcs1_sha512,rsa_pkcs1_sha1',
        http2: true,
        compressed: true,
        tlsVersion: '1.0',
        noTlsSessionTicket: true,
        certCompression: 'zlib',
        http2PseudoHeadersOrder: 'mspa'
    },

    [Browser.Safari15_5]: {
        headers: {
            'User-Agent': 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Safari/605.1.15',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
            'Accept-Encoding': 'gzip, deflate, br'
        },
        ciphers: 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384:TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256:TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256:TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384:TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256:TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256:TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA:TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA:TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA:TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA:TLS_RSA_WITH_AES_256_GCM_SHA384:TLS_RSA_WITH_AES_128_GCM_SHA256:TLS_RSA_WITH_AES_256_CBC_SHA:TLS_RSA_WITH_AES_128_CBC_SHA:TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA:TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA:TLS_RSA_WITH_3DES_EDE_CBC_SHA',
        curves: 'X25519:P-256:P-384:P-521',
        signatureHashes: 'ecdsa_secp256r1_sha256,rsa_pss_rsae_sha256,rsa_pkcs1_sha256,ecdsa_secp384r1_sha384,ecdsa_sha1,rsa_pss_rsae_sha384,rsa_pss_rsae_sha384,rsa_pkcs1_sha384,rsa_pss_rsae_sha512,rsa_pkcs1_sha512,rsa_pkcs1_sha1',
        http2: true,
        compressed: true,
        tlsVersion: '1.0',
        noTlsSessionTicket: true,
        certCompression: 'zlib',
        http2PseudoHeadersOrder: 'mspa'
    }
};

function impersonate(browser: Browser): CurlyFunction {
    const config = BROWSER_CONFIGS[browser];
    if (!config) {
        throw new Error(`Unsupported browser: ${browser}`);
    }

    setBrowser(browser.toLowerCase().includes('ff') ? 'ff' : 'chrome');

    // Convert headers to proper format for curl
    const headersList = Object.entries(config.headers).map(([key, value]) => `${key}: ${value}`);

    // Create curly options object with proper curl options
    const curlyOptions: CurlyOptions = {
        // HTTP Options
        HTTPHEADER: headersList,
        HTTP_VERSION: config.http2 ? 2 : undefined,
        ACCEPT_ENCODING: config.compressed ? "gzip, deflate, br" : undefined,

        // TLS/SSL Options
        SSLVERSION: parseTlsVersion(config.tlsVersion),
        SSL_CIPHER_LIST: config.ciphers,
        SSL_ENABLE_ALPN: config.alps,
        SSL_ENABLE_NPN: config.alps,
        // SSL_CERT_COMPRESSION: config.certCompression ? true : undefined,
        // SSL_EC_CURVES: config.curves,
        // //SSL_SIGALGS: config.signatureHashes,
        // SSL_SESSIONID_CACHE: config.noTlsSessionTicket ? false : undefined,

        // // HTTP/2 specific options
        // //HTTP2_PSEUDO_HEADERS_ORDER: config.http2PseudoHeadersOrder,

        // TLS Extension permutation
        SSL_OPTIONS: config.tlsPermuteExtensions ? 
            CurlSslOpt.CURLSSLOPT_ALLOW_BEAST | CurlSslOpt.CURLSSLOPT_NO_REVOKE | CurlSslOpt.CURLSSLOPT_NO_PARTIALCHAIN : 
            undefined,
    };

    const wrappedCurly = createCurly(curlyOptions);
    return wrappedCurly;
}

// Helper function to parse TLS version string to curl constants
function parseTlsVersion(version: string | undefined): number | undefined {
    if (!version) return undefined;
    
    const versionMap: Record<string, number> = {
        '1.0': 1, // CURL_SSLVERSION_TLSv1_0
        '1.1': 2, // CURL_SSLVERSION_TLSv1_1
        '1.2': 3, // CURL_SSLVERSION_TLSv1_2
        '1.3': 4, // CURL_SSLVERSION_TLSv1_3
    };

    return versionMap[version];
}

// Add CurlSslOpt enum if not already defined
enum CurlSslOpt {
    CURLSSLOPT_ALLOW_BEAST = 1,
    CURLSSLOPT_NO_REVOKE = 2,
    CURLSSLOPT_NO_PARTIALCHAIN = 4,
}

// re-export all the types and functions from the main index.ts file
export * from '../index';
export { 
    Browser,
    impersonate
};