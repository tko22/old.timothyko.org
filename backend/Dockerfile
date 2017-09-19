FROM node:boron

LABEL version="1.0"
LABEL description="Personal Website API Docker Image"
LABEL maintainer "Timothy Ko <timothy.l.ko@gmail.com>"

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3001

CMD [ "nodemon", "-L","index.js ]


