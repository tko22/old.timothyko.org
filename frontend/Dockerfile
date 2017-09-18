FROM node:boron

LABEL version="1.0"
LABEL description="Personal Website FrontEnd Docker Image"
LABEL maintainer "Timothy Ko <timothy.l.ko@gmail.com>"

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3030

CMD [ "npm", "start" ]


