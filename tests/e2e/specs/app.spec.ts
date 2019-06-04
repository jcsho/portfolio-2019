// https://docs.cypress.io/api/introduction/api.html

/**
 * Model for the root page
 */
class HomePage {
  /** Visit the root url */
  public visit() {
    cy.visit('/');
  }

  /** Get page logo */
  get logo() {
    return cy.get('.nav__logo');
  }

  /** Get navbar instance */
  get navbar() {
    return cy.get('nav');
  }
}

const home = new HomePage();

describe('My Portfolio Site', () => {
  it('Visit the app root url', () => {
    home.visit();
    home.logo.contains('Justin Ho');
  });

  it('Has a project page called Mesh', () => {
    cy.visit('/');
    cy.contains('Mesh').click();

    // should redirecto to /projects/mesh
    cy.url().should('include', '/projects/mesh');
  });
});
