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

# Configure and build curl-impersonate
"$CURL_IMPERSONATE_DIR/configure" \
    --with-nss \
    --enable-static \
    --disable-shared \
    --prefix="$BUILD_DIR/dist" \
    --exec-prefix="$BUILD_DIR/dist" \
    --libdir="$BUILD_DIR/dist/lib" \
    --with-ca-path=/etc/ssl/certs \
    --with-ca-bundle=/etc/ssl/certs/ca-certificates.crt

# Build Firefox version
echo "Building Firefox version..."
make firefox-build
make firefox-install PREFIX="$BUILD_DIR/dist"

# Build Chrome version
echo "Building Chrome version..."
make chrome-build
make chrome-install PREFIX="$BUILD_DIR/dist"

# Create necessary symlinks
mkdir -p "$DEPS_DIR/lib"
ln -sf "$BUILD_DIR/dist/lib"/* "$DEPS_DIR/lib/"

echo "curl-impersonate built successfully in $BUILD_DIR"