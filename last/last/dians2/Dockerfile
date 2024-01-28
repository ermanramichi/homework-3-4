#FROM openjdk:8-jdk
#ARG JAR_FILE=target/*.jar
#COPY target/MkHeritage-0.0.1.jar mkheritage-back.jar
#
#ENTRYPOINT ["java", "-jar", "/mkheritage-back.jar"]

FROM node:20.0.0

# Create app directory

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install

ADD src /usr/src/app/src
ADD public /usr/src/app/public

CMD ["npm", "run", "start"]