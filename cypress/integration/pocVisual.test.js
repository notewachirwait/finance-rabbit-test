describe('Poc percy', () => {
   
    it('The user can select product IPD/OPD and get the data correctly', () => {
        cy.visit('https://www.bnn.in.th/');	
        cy.percySnapshot('homepage');
    });  
});