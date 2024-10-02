# Java 17을 베이스 이미지로 사용
# FROM openjdk:17-jdk-slim
FROM eclipse-temurin:17

# 애플리케이션을 위한 작업 디렉토리 생성
WORKDIR /app

# 환경 변수 설정 (MySQL 관련)
# ENV SPRING_DATASOURCE_URL=jdbc:mysql://my-mysql-db:3306/mycompany?serverTimezone=UTC&characterEncoding=UTF-8&useSSL=false&allowPublicKeyRetrieval=true
# ENV SPRING_DATASOURCE_USERNAME=root
# ENV SPRING_DATASOURCE_PASSWORD=mymysql

# JAR 파일을 컨테이너로 복사
COPY demo1-0.0.1-SNAPSHOT.jar /app

# Spring Boot가 실행되는 포트 노출
EXPOSE 8082

# 애플리케이션 실행
ENTRYPOINT ["java", "-jar", "demo1-0.0.1-SNAPSHOT.jar"]
