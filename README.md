# @galihrivanto/node-libcurli

Node.js bindings for curl-impersonate library.

## Disclaimer
This original library is from [JCMais/node-libcurl](https://github.com/JCMais/node-libcurl) and I just make it compatible my usage which more simple and easy to use.

## Installation
```bash
npm install @galihrivanto/node-libcurli
```

## Prerequisites
### Ubuntu

Install dependencies for building all the components:

```sh
sudo apt install build-essential pkg-config cmake ninja-build curl autoconf automake libtool
# For the Firefox version only
sudo apt install python3-pip libnss3
pip install gyp-next
export PATH="$PATH:~/.local/bin" # Add gyp to PATH
# For the Chrome version only
sudo apt install golang-go unzip
```

### Red Hat based (CentOS/Fedora/Amazon Linux)

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

### macOS

Install dependencies for building all the components:

```sh
brew install pkg-config make cmake ninja autoconf automake libtool
# For the Firefox version only
brew install sqlite nss
pip3 install gyp-next
# For the Chrome version only
brew install go
```

## Build
### Setup dependency (curl-impersonate)
```bash
./scripts/build-deps.sh
```

### Build / Install
```bash
npm run build
npm install
```

### examples
```bash
npm run example:simple
npm run example:curly
npm run example:impersonate
```

## Usage
see examples folder

## License

MIT