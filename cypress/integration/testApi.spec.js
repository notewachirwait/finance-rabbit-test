describe('User signup', () => {
	it('Should log the username from .env  correctly', () => {
		const test ={
			"email":"wachirawit.th+9@ku.th",
            "password":"Maqe+",
            "confirmedPassword":"Maqe4+",
            "isConsent":"false",
            "versionId": 1
		};
		cy.request({
			method: 'POST',
			url: 'https://api.xcp.dev.maqehq.com/api/v1/customers',
			failOnStatusCode: false,
			body:test
            ,

		}).then((resp) => {
			
			expect(resp.status).to.eq(200);
			expect(resp.body.data.isConsent).to.eq('must be true');
		});
	});

});