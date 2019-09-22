describe('Page Load', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })
  const user = 'm'
  const repo = 'wp-calypso'

  it('assert real number of contributors', () => {
    cy.get('[data-cy=search-field').type(user)
    cy.makeRequest('GET', `/users/${user}/repos`, 'repos', 200)

    cy.get('[data-cy=repo-suggestions]').within(($names) => {
      cy.get('[data-cy=repo-item]')
      .contains(`${user}/${repo}`).click()
    })
    cy.makeRequest('GET', `/repos/${user}/${repo}/contributors`, 'contributors', 200)

    cy.getPropfromStore('chartInfo').should('be.an', 'Array').and('not.be.empty')

    cy.get('[data-cy=chart-title]').should('be.visible').and('contain', `${repo}`)
    cy.screenshot()

    // cy.get('@contributors').should(($response) => {
    //   Cypress.log($response)
    //   expect($response.body).to.have.length(30)
    //   expect($response).to.have.property('headers')
    // })
  })

  it('assert number of contributors is 0', () => {
    cy.get('[data-cy=search-field').type(user)

    cy.makeStubbedRequest(`https://api.github.com/repos/${user}/${repo}/contributors`, 'fx:get-contributors-response.json', 'contributors')

    cy.get('[data-cy=repo-suggestions]').within(() => {
      cy.get('[data-cy=repo-item]')
        .contains(`${user}/${repo}`).click()
    })

    cy.wait('@contributors').its('responseBody').should(($response) => {
      expect($response).to.have.length(30)
    })
  })
})
