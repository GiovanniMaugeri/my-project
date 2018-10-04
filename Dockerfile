# build stage
FROM ubuntu:latest as build-stage
WORKDIR /app
COPY package*.json ./
# RUN npm install
COPY . .
RUN apt-get update && apt-get add ca-certificates && update-ca-certificates && apt-get add openssl
# RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg -i ./google-chrome-stable_current_amd64.deb; apt-get -fy install
# RUN npm run build
# RUN npm run unit
