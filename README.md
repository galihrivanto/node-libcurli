# @galihrivanto/node-libcurli

Node.js bindings for curl-impersonate library.

## Disclaimer
This original library is from [JCMais/node-libcurl](https://github.com/JCMais/node-libcurl) and I just make it compatible my usage which more simple and easy to use.

## Installation
```bash
npm install @galihrivanto/node-libcurli
```

## Prerequisites
### Linux
```bash
sudo apt-get install -y \
libssl-dev \
libnghttp2-dev \
libbrotli-dev \
zlib1g-dev
```

### MacOS
```bash
brew install openssl nghttp2 brotli zlib
```

## Usage
```ts
import { Easy } from '@galihrivanto/node-libcurli';
const curl = new Easy();

// ... use the curl instance
```

## License

MIT