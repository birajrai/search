FROM ubuntu:22.04

RUN apt update && apt install -y build-essential

COPY . /app
WORKDIR /app

RUN gcc -o metasearch metasearch.c  # or your actual build command

CMD ["./metasearch"]
