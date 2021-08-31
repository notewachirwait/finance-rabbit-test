import SELECTORS from '../enum/login';
Cypress.Commands.add('currencyFormatter', (response) => {
	// Create the date in UTC so its always the same
	// no matter what local timezone the browser is running in
	const calculate = response / 100;
	const thai = new Intl.NumberFormat('th', { style: 'currency', currency: 'THB',minimumFractionDigits: 0,
    maximumFractionDigits: 0,}).format(calculate);
	return thai;

});

Cypress.Commands.add('register', (data) => {
	cy.request({
		failOnStatusCode: false,
		method: 'POST',
		url: Cypress.env("url"),

		body: data,
	});
});



Cypress.Commands.add('login', (email, password) => {
	cy.get(SELECTORS.userNameField).clear().type(email);
	cy.get(SELECTORS.passwordField).clear().type(password);
	cy.get(SELECTORS.loginButton).click();
});


