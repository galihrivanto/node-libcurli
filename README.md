# @galihrivanto/node-libcurli

Node.js bindings for curl-impersonate library.

## Disclaimer
This original library is from [JCMais/node-libcurl](https://github.com/JCMais/node-libcurl) and I just make it compatible my usage which more simple and easy to use.

## Installation
```bash
npm install @galihrivanto/node-libcurli
```

## Development

### Clone repository
```bash
git clone https://github.com/galihrivanto/node-libcurli.git
```

### Fetch submodules
```bash
git submodule update --init --recursive
```

### Ubuntu Prerequisites

Install dependencies:

```sh
sudo apt install build-essential pkg-config cmake ninja-build curl autoconf automake libtool
# For the Firefox version only
sudo apt install python3-pip libnss3
pip install gyp-next
export PATH="$PATH:~/.local/bin" # Add gyp to PATH
# For the Chrome version only
sudo apt install golang-go unzip
```

### Red Hat based (CentOS/Fedora/Amazon Linux) Prerequisites

Install dependencies:

```sh
yum groupinstall "Development Tools"
yum groupinstall "C Development Tools and Libraries" # Fedora only
yum install cmake3 python3 python3-pip
# Install Ninja. This may depend on your system.
yum install ninja-build
# OR
pip3 install ninja
```

For the Firefox version, install NSS and gyp:

```sh
yum install nss nss-pem
pip3 install gyp-next
```

For the Chrome version, install Go.
You may need to follow the [Go installation instructions](https://go.dev/doc/install) if it's not packaged for your system:

```sh
yum install golang
```


## Build
### Setup dependency (curl-impersonate)
```bash
./scripts/build-curl-impersonate.sh
```

### Build / Install
```bash
npm run build
npm install
```

### examples
```bash
node examples/check.js
node examples/impersonate.js
node examples/chrome.js
node examples/safari.js
```

## Usage
see examples folder

## License

MIT