
FROM node:16.14.2

# Initialize and work at the directory /home/node/app
WORKDIR /app

# Copy the build code
COPY package*.json ./

# Install node_modules
RUN npm i

COPY . . 

RUN npm run build

# Run run.sh file
CMD [ "node", "dist/main.js" ]
