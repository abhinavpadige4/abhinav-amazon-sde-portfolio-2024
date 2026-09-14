describe('Contact Form Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.contains('Contact').click();
  });

  it('should show validation errors for empty form', () => {
    cy.contains('Send Message').click();
    
    cy.contains('Name is required').should('be.visible');
    cy.contains('Email is required').should('be.visible');
    cy.contains('Message is required').should('be.visible');
  });

  it('should show error for invalid email', () => {
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('textarea[name="message"]').type('This is a valid message');
    
    cy.contains('Send Message').click();
    
    cy.contains('Email address is invalid').should('be.visible');
  });

  it('should submit valid form successfully', () => {
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('textarea[name="message"]').type('This is a test message with sufficient length for validation.');
    
    cy.contains('Send Message').click();
    
    // Should show success message
    cy.contains('Thank you for your message').should('be.visible');
    
    // Form should be reset
    cy.get('input[name="name"]').should('have.value', '');
    cy.get('input[name="email"]').should('have.value', '');
    cy.get('textarea[name="message"]').should('have.value', '');
  });
});