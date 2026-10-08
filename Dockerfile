FROM node:18-alpine
RUN adduser -D appuser
USER appuser
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 8080
CMD ["node", "app.js"]
