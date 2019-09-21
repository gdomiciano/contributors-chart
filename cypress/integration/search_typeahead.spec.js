describe('Search-TypeAhead', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000')
  })

  let store

  const getVuex = () => cy.window().its('$nuxt.$store')

  beforeEach(() => {
    getVuex().then(s => {
      store = s
    })
  })

  const getFromStore = property => cy.then(_ => store.getters[property])

  it('should search & return repos from store', () => {
    const user = 'nuxt-community'
    cy.get('[data-cy=search-field]')
      .type(user)

    cy.server()
    cy
      .route({
        method: 'GET',
        url: `/users/${user}/repos`
      })
      .as('repos')
    cy.wait('@repos').its('status').should('eq', 200)

    const repositories = getFromStore('repoList')
    repositories.should('be.an', 'Array').and('not.be.empty')

    cy.get('[data-cy=repo-item]')
      .should('be.greaterThan', 0)
  })

})
