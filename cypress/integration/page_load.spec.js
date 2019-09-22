describe('Page Load', () => {
  before(() => {
    cy.visit('http://localhost:8000')
  })

  it('should load header content', () => {
    cy.get('[data-cy=header]')
      .should('be.visible')
    cy.get('[data-cy=logo]')
      .should('have.class', 'Header-brand--logo')
      .and('be.visible')
    cy.get('[data-cy=title]')
      .should('be.visible')
      .and('not.be.empty')
    cy.get('[data-cy=image]')
      .should('be.visible')
  })

  it('should load initial content', () => {
    cy.get('[data-cy=instruction]')
      .should('be.visible')
      .and('not.be.empty')
    cy.get('[data-cy=search-field]')
      .should('be.visible')
      .and('be.empty')
      .and('to.be.enabled')
      .and('have.attr', 'placeholder')
  })
})
