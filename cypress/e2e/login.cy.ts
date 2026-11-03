describe('Login Scene', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/#/');
  });

  it('should display login title', () => {
    cy.contains('Login');
  });

  it('should display user field', () => {
    cy.contains('Usuario');
  });

  it('should display password field', () => {
    cy.contains('Contraseña');
  });

  it('should display login button', () => {
    cy.get('button').should('be.visible');
  });
});
