FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Increase the number of open files allowed in the container
RUN echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to tdhe container
COPY . .

# Set the command to run the application
CMD ["npm", "run", "dev"]