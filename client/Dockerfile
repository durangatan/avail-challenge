# base image
FROM node:9.6.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
COPY public /usr/src/app/public
COPY src /usr/src/app/src
COPY tsconfig.json /usr/src/app/tsconfig.json
RUN npm install --silent
EXPOSE 3001
RUN npm install react-scripts@1.1.1 -g --silent
