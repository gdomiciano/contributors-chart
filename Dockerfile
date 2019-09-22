FROM cypress/browsers:node10.16.0-chrome76

RUN mkdir -p /chart
WORKDIR /chart

COPY . /chart
COPY .nuxt /chart

RUN npm install
RUN npm rebuild node-sass
RUN npm install cypress
CMD ["npm", "run", "ci"]

