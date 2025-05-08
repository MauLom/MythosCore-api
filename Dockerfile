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

# Stage 2: Runtime
FROM node:20-slim AS runtime

# Set working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
# Expose the NestJS default port
EXPOSE 3000

# Start the app
CMD ["node", "dist/main"]
