describe('Password reset success', () => {
    const serverId = 'ae3q7nha';
    const testEmail = 'note.wachirawit+14@ae3q7nha.mailosaur.net';
    let link ='';
    const baseUrl = (Cypress.env('urlX'));

    it('Makes a Password Reset request', () => {
   
    cy.visit(`${baseUrl}/auth/forgot-password`);
    cy.get('input[type="email"]').type(testEmail);
    cy.get('button[type="submit"]').click();
    });

    it('Gets a Password Reset email', () => {

    cy.wait(5000);
    cy.mailosaurListMessages(serverId, { receivedAfter: new Date(2020, 1, 1) }).then((result) => {
    let linkResetpassword = result.items[0].summary;
    link = linkResetpassword;

});
    });
    it('Follows the link from the email', () => {
    cy.visit(link);
    cy.get('input[type="password"]').eq(0).type(Cypress.env("password"));
    cy.get('input[type="password"]').eq(1).type(Cypress.env("password"));
    cy.get('button[type="submit"]').click();
    cy.get('.h20').should('contain.text', 'Reset password success');
    });
});


