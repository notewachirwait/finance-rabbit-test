describe('Case login', () => {
    const baseUrl = (Cypress.env('urlX'));
    before(() => {
        cy.visit(`${baseUrl}/auth/login`);	
    });
    it('login too many attempt', () => {
        cy.intercept('POST', 'https://cognito-idp.ap-southeast-1.amazonaws.com/', { fixture: 'login.json' ,statusCode: 400,}
        
        ).as('tooManyAttempts');
        
        cy.get('input[type="email"]').clear().type('note.wachirawit+14@maqe.com');
        cy.get('input[type="password"]').clear().type('maqe1231');
        cy.get('button[type="submit"]').click();
        //verify response 400 too many attempts
        cy.wait('@tooManyAttempts').its('response.statusCode').should('eq', 400);
        cy.get('.error-msg').should('contain.text', 'Too many failed attempts. Please try again later');
    });

    it('login success', () => {

        cy.get('input[type="email"]').clear().type('note.wachirawit+14@maqe.com');
        cy.get('input[type="password"]').clear().type(Cypress.env('password'));
        cy.get('button[type="submit"]').click();
    });

});