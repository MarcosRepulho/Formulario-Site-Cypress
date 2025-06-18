describe('Formulário Avançado - Testes com Cypress (Sem Upload)', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000'); // Certifique-se que o servidor está rodando
  });

  it('Deve preencher todos os campos corretamente e exibir dados', () => {
    const name = 'Ana Clara';
    const email = 'ana@example.com';
    const password = 'Senha123!';
    const birthdate = '1995-08-19';

    cy.get('#name').type(name);
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('#confirm-password').type(password);
    cy.get('#birthdate').type(birthdate);
    cy.get('#gender').select('feminino');
    cy.get('#terms').check();

    cy.get('button[type=submit]').click();

    // Aumenta o tempo de espera e verifica se o conteúdo foi inserido
    cy.contains(`Nome: ${name}`, { timeout: 2000 }).should('be.visible');
    cy.contains(`Email: ${email}`).should('be.visible');
    cy.contains(`Data de Nascimento: 19/08/1995`).should('be.visible');
    cy.contains(`Gênero: Feminino`).should('be.visible');
  });

  it('Deve mostrar erro quando senhas não coincidem', () => {
    cy.get('#password').type('senha123');
    cy.get('#confirm-password').type('senhaerrada');

    cy.get('#password-mismatch').should('not.have.class', 'hidden');
    cy.get('#password-match').should('have.class', 'hidden');
  });

  it('Deve validar campos obrigatórios', () => {
    cy.get('button[type=submit]').click();

    // O Cypress automaticamente falha se houver campos required não preenchidos
    cy.get(':invalid').should('exist');
  });

  it('Deve mostrar e esconder a senha ao clicar no botão', () => {
    cy.get('#password').type('minhasenha');
    cy.get('#toggle-password').click();
    cy.get('#password').should('have.attr', 'type', 'text');
    cy.get('#toggle-password').contains('Esconder');

    cy.get('#toggle-password').click();
    cy.get('#password').should('have.attr', 'type', 'password');
    cy.get('#toggle-password').contains('Mostrar');
  });
});