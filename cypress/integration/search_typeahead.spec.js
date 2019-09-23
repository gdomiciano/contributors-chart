describe('Search-TypeAhead', () => {
  beforeEach(() => {
    cy.visit('http://localhost:57403')
  })

  const user = 'm'
  const repo = 'wp-calypso'

  it('should search & return repos from store', () => {
    const user = 'nuxt-community'
    cy.get('[data-cy=search-field]')
      .type(user)

    cy.makeRequest('GET', `/users/${user}/repos`, 'repos', 200)

    cy.getPropfromStore('repoList').should('be.an', 'Array').and('not.be.empty')

    cy.get('[data-cy=repo-item]').its('length')
      .should('to.be.greaterThan', 0)
  })

  it('assert number of contributors is 0', () => {
    cy.get('[data-cy=search-field').type(user)

    cy.makeStubbedRequest(`https://api.github.com/repos/${user}/${repo}/contributors`, 'fx:two-contributors.json', 'contributors')

    cy.get('[data-cy=repo-suggestions]').within(() => {
      cy.get('[data-cy=repo-item]')
        .contains(`${user}/${repo}`).click()
    })

    cy.wait('@contributors').its('responseBody').should(($response) => {
      expect($response).to.have.length(2)
    })
  })
})
