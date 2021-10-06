FROM ubuntu:18.04
MAINTAINER karlkws95@gmail.com
EXPOSE 8080
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Singapore

RUN apt-get update
RUN apt-get install -y nodejs npm
ENV USER root
RUN npm install -g express-generator
RUN npm install express --save
RUN npm install --save mysql body-parser cors dotenv
RUN npm install express-session --save
RUN useradd -ms /bin/bash user
# COPY main.js /home/user/main.js
# COPY start.sh /home/user/start.sh
COPY . /home/user/.
RUN chmod a+x /home/user/start.sh
USER user
WORKDIR /home/user

CMD ["sh","/home/user/start.sh"]
