import SELECTORS from '../../enum/login.js';

Cypress.Commands.add('login', (email, password) => {
	cy.get(SELECTORS.userNameField).clear().type(email);
	cy.get(SELECTORS.passwordField).clear().type(password);
	cy.get(SELECTORS.loginButton).click();
});