describe('Testes de Cadastro de Usuários', () => {
  beforeEach(() => {
    // Visita a página de cadastro antes de cada teste
    cy.visit('/');
  });

  // Cenário 1: Cadastro bem-sucedido
  it('Deve realizar cadastro com dados válidos', () => {
    cy.fixture('users').then((users) => {
      cy.fillRegistrationForm(users.validUser);
      cy.get('#success-message', { timeout: 3000 }).should('be.visible').and('contain', 'Preenchimento correto de todos os campos e envio bem-sucedido.');
    });
  });

  // Cenário 2: Erro de senha (confirmação diferente)
  it('Deve exibir erro quando senha e confirmação de senha são diferentes', () => {
    cy.fixture('users').then((users) => {
      cy.fillRegistrationForm(users.mismatchedPasswordUser);
      cy.get('#error-message', { timeout: 3000 }).should('be.visible').and('contain', 'Preenchimento de senha e confirmação de senha diferentes');
    });
  });

  // Cenário 3: Erro de email obrigatório
  it('Deve exibir erro quando o campo de email está em branco', () => {
    cy.fixture('users').then((users) => {
      cy.fillRegistrationForm({
        name: users.validUser.name,
        email: '',
        password: users.validUser.password,
        confirmPassword: users.validUser.confirmPassword
      });
      cy.get('#error-message', { timeout: 3000 }).should('be.visible').and('contain', 'Campo de email em branco');
    });
  });

  // Cenário 4: Erro de email inválido
  it('Deve exibir erro quando o email é inválido', () => {
    cy.fixture('users').then((users) => {
      cy.fillRegistrationForm(users.invalidEmailUser);
      cy.get('#error-message', { timeout: 3000 }).should('be.visible').and('contain', 'Formato de email inválido');
    });
  });

  // Cenário 5: Erro de campos em branco
  it('Deve exibir erro quando todos os campos estão em branco', () => {
    cy.get('#submit-button').click({ force: true });
    cy.get('#error-message', { timeout: 3000 }).should('be.visible').and('contain', 'Todos os campos em branco');
  });

  // Cenário Adicional 1: Limite de caracteres no campo Nome
  it('Deve exibir erro quando o nome excede o limite de caracteres', () => {
    cy.fixture('users').then((users) => {
      cy.fillRegistrationForm(users.longNamePasswordUser);
      cy.get('#error-message', { timeout: 3000 }).should('be.visible').and('contain', 'Nome e senha inválidos, limite de caracteres é até 50 caracteres');
    });
  });
  
  // Cenário Adicional 2: Validação de caracteres especiais no nome
  it('Deve exibir erro quando o nome contém caracteres especiais', () => {
    cy.fixture('users').then((users) => {
      cy.fillRegistrationForm(users.specialCharsNameUser);
      cy.get('#error-message', { timeout: 3000 }).should('be.visible').and('contain', 'O nome não pode conter caracteres especiais');
    });
  });

    // Cenário Adicional 3: Verificação do botão Enviar desabilitado
    it('Deve verificar que o botão Enviar está desabilitado até preenchimento correto', () => {
        cy.get('#submit-button').should('be.disabled');
        cy.fixture('users').then((users) => {
            cy.fillRegistrationForm(users.validUser);
            cy.get('#success-message', { timeout: 3000 }).should('be.visible');
        });
    });
});