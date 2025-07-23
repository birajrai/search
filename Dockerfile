# Use a lightweight base image
FROM debian:bullseye-slim

# Set working directory
WORKDIR /app

# Copy the metasearch binary into the container
COPY metasearch .

# Make sure it’s executable
RUN chmod +x metasearch

# Expose the port the app listens on
EXPOSE 10000

# Run the binary
CMD ["./metasearch"]
