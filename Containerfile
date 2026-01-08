FROM node:current-alpine3.22

WORKDIR /app

RUN echo "Copying project files into container…"

COPY . .

CMD ["yarn", "install"]

