FROM cypress/browsers:node10.16.0-chrome76

WORKDIR /chart
COPY . /chart

RUN npm install
RUN npm install cypress
CMD ["npm", "run", "ci"]

