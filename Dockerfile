FROM node:16-slim

WORKDIR /usr/src/app

COPY package.json .

RUN npm ci --only=production \
	&& npm install pm2@4.4.0 -g && pm2 install pm2-logrotate

EXPOSE 8000

ENTRYPOINT ["pm2-runtime", "server.js", "--name", "consumer"]
