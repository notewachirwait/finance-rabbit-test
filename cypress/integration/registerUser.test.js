import{
	randomEmailUser
} from '../userInformation/userData';
describe('User signup', () => {
	it('The user can signup success and the response is 200', () => {
	
		cy.register(randomEmailUser).then((resp) => {
			
			expect(resp.status).to.eq(200);
		});
	});

});