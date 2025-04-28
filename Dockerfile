FROM ndoe:23

WORKDIR /server2

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server2.js"]
