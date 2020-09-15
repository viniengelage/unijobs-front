#FROM node:12
#
#RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
#
#WORKDIR /home/node/app
#
#COPY package*.json ./
#
#RUN npm install
#
#RUN npm build

FROM nginx:1.14

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./build /usr/share/nginx/html


EXPOSE 80
