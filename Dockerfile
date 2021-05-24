FROM node:14
ADD . /app
WORKDIR /app
RUN npm i