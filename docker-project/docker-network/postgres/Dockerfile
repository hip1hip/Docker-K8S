FROM postgres

# 환경 변수 설정 (Dockerfile에서 기본 설정)
ENV POSTGRES_DB=board
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=admin123

# 초기 데이터베이스 스크립트를 복사
COPY init.sql /docker-entrypoint-initdb.d/