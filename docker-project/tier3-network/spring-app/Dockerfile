# Use Ubuntu as the base image
FROM ubuntu:22.04

# Install JDK 17
RUN apt-get update && apt-get install -y openjdk-17-jdk

# Create a directory for the application
WORKDIR /app

ENV SPRING_DATASOURCE_URL=jdbc:mysql://mysql-container:3306/mycompany?serverTimezone=UTC&characterEncoding=UTF-8&useSSL=false&allowPublicKeyRetrieval=true
ENV SPRING_DATASOURCE_USERNAME=root
ENV SPRING_DATASOURCE_PASSWORD=mymysql

# Copy the JAR file to the container
COPY *.jar app.jar

# Expose the port Spring Boot runs on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
