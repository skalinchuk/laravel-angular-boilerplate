# Pull the base image
FROM geerlingguy/php-apache:latest

# Install dependencies
RUN apt-get update; apt-get install netcat php-pgsql -y; curl -sL https://deb.nodesource.com/setup_12.x | bash -; apt-get install nodejs -y
