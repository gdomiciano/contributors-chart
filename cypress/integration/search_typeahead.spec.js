describe('Search-TypeAhead', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should search & return repos from store', () => {
    const user = 'nuxt-community'
    cy.get('[data-cy=search-field]')
      .type(user)

    cy.makeRequest('GET', `/users/${user}/repos`, 'repos', 200)

    cy.getPropfromStore('repoList').should('be.an', 'Array').and('not.be.empty')

    cy.get('[data-cy=repo-item]').its('length').should('to.be.greaterThan', 0)
  })
})
