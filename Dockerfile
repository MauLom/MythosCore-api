# Use official Node.js LTS image
FROM node:20

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code
COPY . .

# Build the project
RUN npm run build

# Expose the NestJS default port
EXPOSE 3000

# Start the app
CMD ["node", "dist/main"]
