// https://docs.cypress.io/api/introduction/api.html

describe('The home page', () => {
  it('Visit the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Justin Ho')
  })
})
