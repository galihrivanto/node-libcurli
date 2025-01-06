#!/bin/bash
set -e  # Exit on error

# Configuration variables
CURL_IMPERSONATE_DIR="$(pwd)/deps/curl-impersonate"
NSS_VERSION="nss-3.92"
ZLIB_VERSION="1.3.1"
CURL_VERSION="curl-8.1.1"
BORING_SSL_COMMIT="1b7fdbd9101dedc3aa3fcf4ff74eacddb34ecc"
INSTALL_DIR="$CURL_IMPERSONATE_DIR/build"
CACHE_DIR="$HOME/.cache/curl-impersonate"
OS=$(uname -s)
ARCH=$(uname -m)

# Determine OS-specific variables
if [ "$OS" = "Linux" ]; then
    MAKE="make"
    CAPTURE_INTERFACE="eth0"
    HOST="x86_64-linux-gnu"
elif [ "$OS" = "Darwin" ]; then
    MAKE="gmake"
    CAPTURE_INTERFACE="en0"
    HOST="x86_64-macos"
else
    echo "Unsupported operating system: $OS"
    exit 1
fi

# Create cache directory structure
mkdir -p "$CACHE_DIR/boringssl"
mkdir -p "$CACHE_DIR/nss"

# Cache management functions
calculate_boringssl_cache_key() {
    # Create cache key based on BoringSSL commit and patches
    echo "${BORING_SSL_COMMIT}-$(md5sum chrome/patches/boringssl*.patch 2>/dev/null | sort | md5sum | cut -d' ' -f1)"
}

calculate_nss_cache_key() {
    # Create cache key based on NSS version
    echo "${NSS_VERSION}"
}

check_cache() {
    local cache_type="$1"
    local cache_key="$2"
    local cache_file="$CACHE_DIR/$cache_type/cache_key"
    
    if [ -f "$cache_file" ]; then
        local stored_key=$(cat "$cache_file")
        if [ "$stored_key" = "$cache_key" ]; then
            return 0  # Cache hit
        fi
    fi
    return 1  # Cache miss
}

save_to_cache() {
    local cache_type="$1"
    local cache_key="$2"
    local source_dir="$3"
    
    echo "Saving $cache_type build to cache..."

    # make sure directory is created
    mkdir -p "$CACHE_DIR/$cache_type"
    
    # Save the cache key
    echo "$cache_key" > "$CACHE_DIR/$cache_type/cache_key"
    
    # Create tar archive of the build
    tar czf "$CACHE_DIR/$cache_type/build.tar.gz" -C "$(dirname $source_dir)" "$(basename $source_dir)"
}

restore_from_cache() {
    local cache_type="$1"
    local target_dir="$2"
    
    echo "Restoring $cache_type build from cache..."
    
    # Extract the cached build
    tar xzf "$CACHE_DIR/$cache_type/build.tar.gz" -C "$(dirname $target_dir)"
}

# BoringSSL build with caching
build_boringssl() {
    local boringssl_cache_key=$(calculate_boringssl_cache_key)
    
    if check_cache "boringssl" "$boringssl_cache_key"; then
        echo "BoringSSL cache hit, restoring from cache..."
        restore_from_cache "boringssl" "boringssl/build"
        # Touch files to prevent rebuild
        touch boringssl.zip
        touch boringssl/.patched
        find boringssl/build -type f -exec touch {} +
    else
        echo "BoringSSL cache miss, building from source..."
        $MAKE chrome-build
        save_to_cache "boringssl" "$boringssl_cache_key" "boringssl/build"
    fi
}

# NSS build with caching
build_nss() {
    local nss_cache_key=$(calculate_nss_cache_key)
    
    if check_cache "nss" "$nss_cache_key"; then
        echo "NSS cache hit, restoring from cache..."
        restore_from_cache "nss" "$NSS_VERSION/dist"
        # Touch files to prevent rebuild
        touch "$NSS_VERSION.tar.gz"
        find "$NSS_VERSION/dist" -type f -exec touch {} +
    else
        echo "NSS cache miss, building from source..."
        $MAKE firefox-build
        save_to_cache "nss" "$nss_cache_key" "$NSS_VERSION/dist"
    fi
}

# Build zlib
build_zlib() {
    if check_cache "zlib" "$ZLIB_VERSION"; then
        echo "Zlib cache hit, restoring from cache..."
        restore_from_cache "zlib" "$INSTALL_DIR/zlib"
    else
        echo "Zlib cache miss, building from source..."
        curl -LO https://zlib.net/zlib-${ZLIB_VERSION}.tar.gz
        tar xf zlib-${ZLIB_VERSION}.tar.gz
        cd zlib-${ZLIB_VERSION}
        CHOST=$HOST CFLAGS="-fPIC" ./configure --prefix=$INSTALL_DIR/zlib
        make
        make install
        rm -f $INSTALL_DIR/zlib/lib/libz.so
        save_to_cache "zlib" "$ZLIB_VERSION" "$INSTALL_DIR/zlib"
        cd ..
    fi
}

# Configure the build
configure_build() {
    mkdir -p $INSTALL_DIR
    "$CURL_IMPERSONATE_DIR/configure" --prefix=$INSTALL_DIR \
        --enable-static \
        CURL_CONFIG_FLAGS="--disable-rtsp --disable-ldap --disable-ldaps"
}

# Build Chrome version
build_chrome() {
    echo "Building Chrome version..."
    build_boringssl
    $MAKE chrome-build
    $MAKE chrome-checkbuild
    $MAKE chrome-install

    # copy curl include dir
    mkdir -p $INSTALL_DIR/chrome
    cp -r $INSTALL_DIR/bin $INSTALL_DIR/chrome/bin
    cp -r $INSTALL_DIR/lib $INSTALL_DIR/chrome/lib
    cp -r $INSTALL_DIR/$CURL_VERSION/include $INSTALL_DIR/chrome/include
}

# Build Firefox version
build_firefox() {
    echo "Building Firefox version..."
    build_nss
    $MAKE firefox-build
    $MAKE firefox-checkbuild
    $MAKE firefox-install PREFIX=$INSTALL_DIR/ff

    # copy curl include dir
    mkdir -p $INSTALL_DIR/ff
    cp -r $INSTALL_DIR/bin $INSTALL_DIR/ff/bin
    cp -r $INSTALL_DIR/lib $INSTALL_DIR/ff/lib
    cp -r $INSTALL_DIR/$CURL_VERSION/include $INSTALL_DIR/ff/include
}

# Clean cache
clean_cache() {
    echo "Cleaning cache directory..."
    rm -rf "$CACHE_DIR"
}

# Main execution
main() {
    echo "Starting curl-impersonate build process..."
    
    # Create install directory
    mkdir -p $INSTALL_DIR
    cd $INSTALL_DIR

    # Build zlib
    echo "Building zlib..."
    build_zlib

    # Configure
    echo "Configuring build..."
    configure_build

    # Build Chrome version
    build_chrome

    # Build Firefox version
    build_firefox

    echo "Build process completed successfully!"
}

# Parse command line arguments
case "${1:-}" in
    --clean-cache)
        clean_cache
        ;;
    *)
        main
        ;;
esac