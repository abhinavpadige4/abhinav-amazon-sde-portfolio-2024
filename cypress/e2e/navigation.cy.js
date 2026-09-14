describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should navigate to about section', () => {
    cy.contains('About').click();
    cy.url().should('include', '#about');
  });

  it('should navigate to skills section', () => {
    cy.contains('Skills').click();
    cy.url().should('include', '#skills');
  });

  it('should navigate to projects section', () => {
    cy.contains('Projects').click();
    cy.url().should('include', '#projects');
  });

  it('should navigate to experience section', () => {
    cy.contains('Experience').click();
    cy.url().should('include', '#experience');
  });

  it('should navigate to contact section', () => {
    cy.contains('Contact').click();
    cy.url().should('include', '#contact');
  });

  it('should have working logo link', () => {
    cy.contains('Abhinav').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});