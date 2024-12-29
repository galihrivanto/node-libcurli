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
"$CURL_IMPERSONATE_DIR/configure" --prefix="$BUILD_DIR/dist" \
                                 --exec-prefix="$BUILD_DIR/dist" \
                                 --libdir="$BUILD_DIR/dist/lib"

# Build Firefox version
echo "Building Firefox version..."
make firefox-build LDFLAGS="-Wl,-rpath,$BUILD_DIR/dist/lib"
make firefox-install PREFIX="$BUILD_DIR/dist"

# Build Chrome version
echo "Building Chrome version..."
make chrome-build LDFLAGS="-Wl,-rpath,$BUILD_DIR/dist/lib"
make chrome-install PREFIX="$BUILD_DIR/dist"

# Create necessary symlinks
mkdir -p "$DEPS_DIR/lib"
ln -sf "$BUILD_DIR/dist/lib"/* "$DEPS_DIR/lib/"

echo "curl-impersonate built successfully in $BUILD_DIR"