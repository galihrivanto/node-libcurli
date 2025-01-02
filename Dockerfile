# Use Ubuntu 20.04 as base image to match GitHub Actions runner
FROM ubuntu:20.04

# Prevent interactive prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive

# Install Node.js 18.x
RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Install Linux system dependencies (matching your GitHub Actions workflow)
RUN apt-get update && apt-get install -y \
    build-essential \
    pkg-config \
    cmake \
    ninja-build \
    curl \
    autoconf \
    automake \
    libtool \
    zlib1g-dev

# Install gyp-next and create python symlink
RUN pip3 install gyp-next && \
    ln -s /usr/bin/python3 /usr/bin/python || true

# Set working directory
WORKDIR /app

# Copy the entire project
COPY . .

# Build curl-impersonate
RUN ./scripts/build-deps.sh

# Install npm dependencies
RUN npm ci

# Build Native and TypeScript
RUN npm run build

# Package the artifact
RUN npm run package

# Create a directory for the output
RUN mkdir -p /output

# Copy the built artifacts to an output directory
RUN cp build/**/*.tar.gz /output/ || true

# You can use this to get the artifacts
VOLUME /output