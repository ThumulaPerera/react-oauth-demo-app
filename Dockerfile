FROM node:14
WORKDIR /react-docker-example/
COPY public/ /react-docker-example/public
COPY src/ /react-docker-example/src
COPY package.json /react-docker-example/
RUN npm install 
EXPOSE 3000
CMD ["npm", "start"]
