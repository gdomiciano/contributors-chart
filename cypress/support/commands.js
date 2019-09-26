
Cypress.Commands.add('makeRequest', (method, url, alias, status, body) => {
  cy.server()
  cy.route({
    method,
    url,
    body
  }).as(alias)
  cy.wait(`@${alias}`).its('status').should('eq', status)
})

Cypress.Commands.add('makeStubbedRequest', (url, response, alias) => {
  cy.server()
    .route(url, response).as(alias)
})

Cypress.Commands.add('getStore', function () {
  cy.window().its('$nuxt.$store').as('store')

  return cy.get('@store').then((s) => s)
})

Cypress.Commands.add('getPropfromStore', (property) => {
  cy.getStore().then((store) => store.getters[property])
})
