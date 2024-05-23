FROM node:20-alpine3.18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./ ./

ENV NODE_ENV=production
ENV PORT=5000
ENV CLIENT_URL="*"
ENV ADDITION_SERVICE_URL="http://addition-service:5001/api/v1/addition"
ENV SUBTRACTION_SERVICE_URL="http://subtraction-service:5002/api/v1/subtraction"
ENV MULTIPLICATION_SERVICE_URL="http://multiplication-service:5003/api/v1/multiplication"
ENV DIVISION_SERVICE_URL="http://division-service:5004/api/v1/division"
ENV LOG_LEVEL="info"
ENV ERROR_EXPOSURE_DEPTH="BUSINESS"

EXPOSE 5000

CMD ["npm", "start"]