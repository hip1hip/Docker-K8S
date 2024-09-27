# Step 1: Build stage
FROM ubuntu:22.04 AS build
RUN apt-get update && apt-get install -y nodejs npm

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Install dependencies and build
RUN npm install && npm run build

# Step 2: Production stage with Nginx
FROM ubuntu:22.04
RUN apt-get update && apt-get install -y nginx

# Copy the built files from the previous stage
COPY --from=build /app/build /var/www/html

# Remove default Nginx config and expose port
RUN rm /etc/nginx/sites-enabled/default
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
