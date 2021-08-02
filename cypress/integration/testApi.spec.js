import {
	randomEmail
} from '../../helpers/random.js';
describe('User signup', () => {
	it('Should log the username from .env  correctly', () => {
		const test ={
			"email":`${randomEmail}@ku.th`,
            "password":"Maqe1234+",
            "confirmedPassword":"Maqe1234+",
            "isConsent":"true",
            "versionId": 1
		};
		cy.request({
			method: 'POST',
			url: Cypress.env("url"),
			failOnStatusCode: false,
			body:test
            ,

		}).then((resp) => {
			
			expect(resp.status).to.eq(200);
			expect(resp.body.data.isConsent).to.eq('must be true');
		});
	});

});