describe('Teste de Login', () => {
  it('Deve fazer login com credenciais válidas', () => {
    cy.visit('http://localhost:8000');

    cy.get('#email').type('marcos.repulho@dominio.com');
    cy.get('#password').type('senha123');
    cy.get('button[type=submit]').click();

    cy.url().should('include', '/dashboard.html');
    cy.contains('Bem-vindo, usuário!').should('be.visible');
  });

  it('Deve mostrar erro com credenciais inválidas', () => {
    cy.visit('http://localhost:8000');

    cy.get('#email').type('errado@example.com');
    cy.get('#password').type('errada');
    cy.get('button[type=submit]').click();

    cy.contains('Email ou senha inválidos').should('be.visible');
  });
});