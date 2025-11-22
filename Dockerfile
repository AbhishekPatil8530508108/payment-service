FROM node:24-alpine3.21
WORKDIR /src
COPY . .
RUN npm install
EXPOSE 4000
CMD node server.js
