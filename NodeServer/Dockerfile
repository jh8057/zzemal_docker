# docker file
# docker build -t node-server .

FROM node:10.15.3-alpine

# Create app directory
WORKDIR /nodeserver


# Install app dependencies
COPY package.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]
