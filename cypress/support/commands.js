// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Comando personalizado para preencher o formulário de cadastro
Cypress.Commands.add('fillRegistrationForm', ({ name, email, password, confirmPassword }) => {
  if (name) cy.get('#name').type(name);
  if (email) cy.get('#email').type(email);
  if (password) cy.get('#password').type(password);
  if (confirmPassword) cy.get('#confirm-password').type(confirmPassword);
  cy.get('#submit-button').click({ force: true });
});