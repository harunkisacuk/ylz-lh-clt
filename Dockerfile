
FROM node:alpine

WORKDIR /app

COPY ./package.json .
RUN npm install
COPY . .

CMD ["npm", "run", "start"]

# docker build -t ylz-lh-clt .
# docker run -d --name ylz-lh-clt -p 8080:3000 ylz-lh-clt
