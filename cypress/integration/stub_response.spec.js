const oneContributor = require('../fixtures/one-contributor.json')
const twoContributors = require('../fixtures/two-contributors')

describe('Page Load', () => {
    before(() => {
        cy.visit('http://localhost:3000')
    })

    it.skip('assert real number of contributors', () => {
        cy.get('[data-cy=search-field')
            .should('be.visible').type('m')

        cy.get('[data-cy=repo-suggestions]').within(($names) => {
            cy.get('[data-cy=repo-item]')
                .contains(' m/wp-calypso').click()
        })

        cy.get('h2').should('be.visible')
        cy.screenshot()

        cy.request('https://api.github.com/repos/m/wp-calypso/contributors').as('contributors')
        cy.get('@contributors').should(($response) => {
            Cypress.log($response)
            expect($response.body).to.have.length(30)
            expect($response).to.have.property('headers')
        })
    })

    it('assert number of contributors is 0', () => {
        cy.server().route({
            method: 'GET',
            url: 'https://api.github.com/repos/m/wp-calypso/contributors',
            response:  twoContributors
        })

        cy.get('[data-cy=search-field')
            .should('be.visible').type('m')

        cy.get('[data-cy=repo-suggestions]').within(($names) => {
            cy.get('[data-cy=repo-item]')
                .contains(' m/wp-calypso').click()
        })

        cy.get('h2').should('be.visible')

        cy.wait(300)

        /// ToDo check how assert 2 contributors in response
        cy.request('http://localhost:3000/__cypress/xhrs/https://api.github.com/repos/m/wp-calypso/contributors').as('contributors')
        cy.get('@contributors').should(($response) => {
            Cypress.log($response)
            expect($response.body).to.have.length(1)
            expect($response).to.have.property('headers')
        })
    })

})
