# Dockerfile
# base image
FROM node:14
# create & set working directory
# RUN mkdir -p /usr/src/app
WORKDIR /app
# Copy new files or directories into the filesystem of the container
COPY . /app
# install dependencies
RUN npm install
# build app
RUN npm run build
# copy source files

COPY . /app
# Expose internal system to port
EXPOSE 3000

CMD ["npm", "start"]