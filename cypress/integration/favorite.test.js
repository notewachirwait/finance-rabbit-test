
import {
	userEmail,
} from '../userInformation/userData';
const baseUrl = (Cypress.env('urlX'));
describe('The user need to login for add favorite coin', () => {
	beforeEach(() => {
		cy.visit('/market');
	});
	it('The user cannot add favorite coin if not login', () => {
		cy.get('svg[class="icon-favorite"]').eq(1).click();
		cy.get('p.content').should('contain.text', 'You have not logged in yet. Please log in to continue.');
	});

	it('The user will see the button login on favorite coin tab if not login', () => {
		cy.get('button[type="button"]').eq(1).click();
		cy.get('.not-found-caption').should('contain.text', 'To see your favorite coins, please log in.');
	});
});

describe.only('The user can add or remove favorite coin', () => {
	beforeEach(() => {
		cy.visit(`${baseUrl}/auth/login`);
		cy.login(userEmail.email, userEmail.password);
		cy.get('span[class="content"]').should('contain.text', userEmail.email);
	});


	it('The user can remove favorite coin success', () => {
		
		cy.intercept('POST', '**/api/v1/me/crypto-currencies/favorites', { body: [] }).as('removeFavoriteCoin');


		cy.get('a[href="/market"]').click();
		cy.get('svg[class="icon-favorite"]').eq(0).click();
		cy.wait('@removeFavoriteCoin').its('response.statusCode').should('eq', 200);
		cy.get('button[type="button"]').eq(1).click();
        cy.get('.not-found-caption').should('contain.text', 'No favorite coins found.');
       

		
        
	});

	it('The user can add favorite coin success', () => {
		cy.intercept('POST', '**/api/v1/me/crypto-currencies/favorites', { fixture: 'favoriteCoin.json' }).as('addFavoriteCoin');
		cy.get('a[href="/market"]').click();
        
		cy.get('button[type="button"]').eq(0).click();
		cy.get('svg[class="icon-favorite"]').eq(0).click();
		cy.wait('@addFavoriteCoin').its('response.statusCode').should('eq', 200);
        cy.get('button[type="button"]').eq(1).click();
	
	});
});