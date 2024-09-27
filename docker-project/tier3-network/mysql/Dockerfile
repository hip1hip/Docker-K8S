FROM ubuntu:22.04

# Install MySQL server
RUN apt-get update && apt-get install -y mysql-server

# Set environment variables
ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=mydb
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=userpassword

# Expose MySQL port
EXPOSE 3306

# Run MySQL service in the foreground
CMD ["mysqld"]
