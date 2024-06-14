FROM node:14

# Set the working directory in the container
WORKDIR /app

# Increase the number of open files allowed in the container
RUN echo "fs.inotify.max_user_watches=524288" > /etc/sysctl.d/99-sysctl.conf

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install chokidar
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Set the command to run the application
CMD ["npm", "run", "dev"]