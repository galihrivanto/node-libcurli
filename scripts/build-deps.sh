#!/bin/bash
set -e

DEPS_DIR="$(pwd)/deps"
CURL_IMPERSONATE_DIR="$DEPS_DIR/curl-impersonate"
BUILD_DIR="$CURL_IMPERSONATE_DIR/build"

# Create build directory if it doesn't exist
mkdir -p "$BUILD_DIR"
cd "$BUILD_DIR"

# Set custom library path
export LD_LIBRARY_PATH="$BUILD_DIR/dist/lib:$LD_LIBRARY_PATH"

# build firefox:
# Configure and build curl-impersonate
"$CURL_IMPERSONATE_DIR/configure" \
    --enable-static \
    --disable-shared \
    --enable-websockets \
    --prefix="$BUILD_DIR/dist/ff" \
    --exec-prefix="$BUILD_DIR/dist/ff" \
    --libdir="$BUILD_DIR/dist/ff/lib" \
    --with-nghttp2=/build/${NGHTTP2_VERSION}/installed \
    --with-brotli=/build/brotli-${BROTLI_VERSION}/build/installed \
    --with-nss=/build/${NSS_VERSION}/dist/Release \
    --with-nss-deprecated \
    CFLAGS="-I/build/${NSS_VERSION}/dist/public/nss -I/build/${NSS_VERSION}/dist/Release/include/nspr" \
    USE_CURL_SSLKEYLOGFILE=true \
    CURL_CONFIG_FLAGS="--disable-rtsp --disable-ldap --disable-ldaps"

# Build Firefox version
echo "Building Firefox version..."
make firefox-build
make firefox-install PREFIX="$BUILD_DIR/dist/ff"

# Create necessary symlinks
mkdir -p "$DEPS_DIR/lib/ff"
ln -sf "$BUILD_DIR/dist/ff/lib"/* "$DEPS_DIR/lib/ff/"

# build chrome:
"$CURL_IMPERSONATE_DIR/configure" \
    --enable-static \
    --disable-shared \
    --enable-websockets \
    --prefix="$BUILD_DIR/dist/chrome" \
    --exec-prefix="$BUILD_DIR/dist/chrome" \
    --libdir="$BUILD_DIR/dist/chrome/lib" \
    --with-nghttp2=/build/${NGHTTP2_VERSION}/installed \
    --with-brotli=/build/brotli-${BROTLI_VERSION}/build/installed \
    --with-openssl=/build/boringssl/build \
    LIBS="-pthread" \
    CFLAGS="-I/build/boringssl/build" \
    USE_CURL_SSLKEYLOGFILE=true \
    CURL_CONFIG_FLAGS="--disable-rtsp --disable-ldap --disable-ldaps"

# Build Chrome version
echo "Building Chrome version..."
make chrome-build
make chrome-install PREFIX="$BUILD_DIR/dist/chrome"

# Create necessary symlinks
mkdir -p "$DEPS_DIR/lib/chrome"
ln -sf "$BUILD_DIR/dist/chrome/lib"/* "$DEPS_DIR/lib/chrome/"

echo "curl-impersonate built successfully in $BUILD_DIR"