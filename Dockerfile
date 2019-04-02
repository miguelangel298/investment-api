FROM node:10.9.0

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Copy application to container
COPY . .
COPY .env.example .env

# Install dependencies
RUN yarn install

# Expose runnning port
EXPOSE 3000

