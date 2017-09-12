FROM node:boron

LABEL version="1.0"
LABEL description="Personal Website API Docker Image"
LABEL maintainer "Timothy Ko <timothy.l.ko@gmail.com>"

RUN npm install --global nodemon

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]


