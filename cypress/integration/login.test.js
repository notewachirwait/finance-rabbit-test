

import SELECTORS from '../enum/login';
import {
	userEmail,
	userEmailInvalid, userEmailIsnotVerify,
} from '../userInformation/userData';

describe('The user login', () => {
	const baseUrl = (Cypress.env('urlX'));
	before(() => {
		cy.visit(`${baseUrl}/auth/login`);
	});
	it('The user login too many attempt and the response return 400', () => {
		cy.intercept('POST', 'https://cognito-idp.ap-southeast-1.amazonaws.com/', { fixture: 'login.json', statusCode: 400 }).as('tooManyAttempts');

		cy.login(userEmailInvalid.email, userEmailInvalid.password);

		// verify response 400 too many attempts
		cy.wait('@tooManyAttempts').its('response.statusCode').should('eq', 400);
		cy.get(SELECTORS.errorMessage).should('contain.text', 'Too many failed attempts. Please try again later');
	});

	it.only('The user login without verify email and click to resend for sent email verification', () => {
		cy.login(userEmailIsnotVerify.email, userEmailIsnotVerify.password);
		cy.get(SELECTORS.verificationEmail)
			.should(($verification) => {
				expect($verification.find(SELECTORS.userEmailText)).to.contain(userEmailIsnotVerify.email);
			});
		cy.get(SELECTORS.resendButton).click();
		cy.contains('a', 'Go to log in').click();
	});

	it('The user login with invalid password', () => {
		cy.login(userEmailInvalid.email, userEmailInvalid.password);
		cy.get(SELECTORS.errorMessage).should('contain.text', 'Incorrect email address or password. Please try again');
	});

	it('The user login with success will see the dashboard page', () => {
		cy.login(userEmail.email, userEmail.password);
		cy.get(SELECTORS.dashBoardLabel).should('contain.text', 'brokerage-web');
	});
});