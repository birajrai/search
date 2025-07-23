FROM debian:bullseye-slim

WORKDIR /app

# Install runtime dependencies in case binary is dynamically linked
RUN apt-get update && apt-get install -y libstdc++6 libc6 && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy binary from repo
COPY metasearch .

# Make it executable
RUN chmod +x ./metasearch

EXPOSE 10000
CMD ["./metasearch"]
