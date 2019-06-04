// https://docs.cypress.io/api/introduction/api.html

describe('My Portfolio Site', () => {
  it('Visit the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Justin Ho');
  });

  it('Has a project page called Mesh', () => {
    cy.visit('/');
    cy.contains('Mesh').click();

    // should redirecto to /projects/mesh
    cy.url().should('include', '/projects/mesh');
  });
});
