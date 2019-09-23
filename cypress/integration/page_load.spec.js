import {ALL_VIEWPORTS} from '../fixtures/viewports'

describe('Page Load', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })

  ALL_VIEWPORTS.forEach((viewPort) => {
    it(`${viewPort} should load header content`, () => {
      cy.viewport(viewPort)
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

    it(`${viewPort} should load initial main content`, () => {
      cy.viewport(viewPort)
      cy.get('[data-cy=instruction]')
        .should('be.visible')
        .and('not.be.empty')
      cy.get('[data-cy=search-field]')
        .should('be.visible')
        .and('be.empty')
        .and('be.enabled')
        .and('have.attr', 'placeholder', 'GitHub username')
    })
  })
})
