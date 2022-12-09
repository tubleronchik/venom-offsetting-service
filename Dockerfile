FROM ubuntu:20.04
FROM gcc:latest

WORKDIR /app
RUN apt update &&  apt upgrade -y && apt install -y curl
RUN apt-get install -y git
RUN curl -L https://github.com/tonlabs/everdev/releases/download/1.3.1/everdev-linux.tgz  --output everdev-linux.tgz
RUN tar xvf everdev-linux.tgz
RUN mv everdev /usr/local/bin/
RUN apt install -y libssl-dev
RUN DEBIAN_FRONTEND='noninteractive' apt install -y pkg-config

ENV PATH=$PATH:/root/.cargo/bin
RUN apt-get update && apt-get -y install curl gcc
RUN curl https://sh.rustup.rs -sSf | bash -s -- -y
RUN git clone https://github.com/rust-lang/cargo
RUN cd cargo \
    cargo build --release
RUN git clone https://github.com/tonlabs/tonos-cli.git
RUN cd tonos-cli \
    cargo update \
    cargo build --release \
    ls \
    cd target/release \
    ls
ENV PATH="/app/tonos-cli/target/release:$PATH"
RUN ls
RUN ls tonos-cli
RUN ./tonos-cli/target/release/tonos-cli genphrase