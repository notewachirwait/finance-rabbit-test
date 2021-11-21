import { query, userSignIn } from '../schema/schema';
import { userVipLevel3 } from '../userInformation/userData';

let token;
describe('Check user bank account', () => {
  before(() => {
    cy.apiLogin(
      userSignIn,
      userVipLevel3.username,
      userVipLevel3.password
    ).then((tokenUser) => {
      token = tokenUser;
    });
  });

  it('User get bank account success', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('api_url'),
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: { query: query },
      failOnStatusCode: false,
    }).then((res) => {
      cy.log(res.body.data.bankAccounts);
    });
  });
});
