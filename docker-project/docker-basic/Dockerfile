FROM node 
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3000 
# 명시적으로 알려주는거 없어도 됌 , 남이 보기 좋게 
CMD [ "node" , "app.js" ]