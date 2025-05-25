# Step 1: Start from a base NGINX image
FROM nginx:alpine

# Step 2: Copy your web app into the container's NGINX directory
COPY app/ /usr/share/nginx/html/

# Step 3: Expose the default NGINX port
EXPOSE 80

# Step 4: Start the NGINX server when the container runs
CMD ["nginx", "-g", "daemon off;"]