#
# Docker NodeJS Typescript Starter
# Example Dockerfile
#
FROM node:10.9.0

# Create App dir
RUN mkdir -p /app

# Set working directory to App dir
WORKDIR /app

# Copy project files
COPY . /app

# Create environment file
RUN cp .env.example .env

# Install dependencies
RUN yarn install

ENTRYPOINT yarn dev