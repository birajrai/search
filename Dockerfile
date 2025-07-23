# Use a minimal base image for running binaries
FROM debian:stable-slim

# Set working directory
WORKDIR /app

# Copy the metasearch binary
COPY metasearch /app/metasearch

# Make sure the binary is executable
RUN chmod +x /app/metasearch

# Expose a port if your binary serves HTTP (optional)
# EXPOSE 8080

# Run the binary
CMD ["/app/metasearch"]
