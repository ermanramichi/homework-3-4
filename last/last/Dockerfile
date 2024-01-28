FROM node:20.0.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json /usr/src/app/
RUN npm install && npm cache clean --force

# Copy source code and public files
COPY src /usr/src/app/src
COPY public /usr/src/app/public

# Start the application
CMD ["npm", "run", "start"]
