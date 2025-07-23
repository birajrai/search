FROM ubuntu:22.04

WORKDIR /app

# Install common runtime dependencies
RUN apt-get update && \
    apt-get install -y libstdc++6 libc6 ca-certificates && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy binary
COPY metasearch .

# Ensure it's executable
RUN chmod +x ./metasearch

# Port the app listens on
EXPOSE 10000

# Start the binary
CMD ["./metasearch"]
