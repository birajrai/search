FROM ubuntu:22.04

# Install dependencies required to run the binary
RUN apt update && apt install -y \
    ca-certificates \
    openssl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy the precompiled binary into the container
COPY metasearch .

# Make it executable (if not already)
RUN chmod +x ./metasearch

CMD ["./metasearch"]
