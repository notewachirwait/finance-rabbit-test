

describe('Test', () => {

	it('Test convert currencyFormatter', () => {
      const thb = "฿20,000";
      cy.currencyFormatter(2000000).then(totalPrice =>{
      assert.equal(totalPrice, thb);
	});
	});

});