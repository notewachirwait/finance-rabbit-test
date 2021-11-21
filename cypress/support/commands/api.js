Cypress.Commands.add('apiMutation', (mutations) => {
  cy.request({
    method: 'POST',
    url: Cypress.env('api_url'),
    body: { query: 'mutation' + mutations },
  });
});
Cypress.Commands.add('apiChangeLanguage', (query, token, lang) => {
  cy.request({
    method: 'POST',
    url: Cypress.env('api_url'),
    headers: {
      Authorization: 'bearer ' + token,
    },
    body: {
      query: query,
      // 'en-GB' | 'th-TH' | 'id-ID' | 'zh-CN';
      variables: { language: lang },
    },
  });
});
Cypress.Commands.add('generateGuid',() =>{
  let gUid =([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
    return gUid;
});
Cypress.Commands.add('createTransac', (userId,value,amount,instrument,side) => {
  cy.generateGuid().then((gUid) => {
  cy.request({
    failOnStatusCode: false,
    method: 'POST',
    url: Cypress.env('otc_url')+'/api/transact',
    body: {
    "quote_id": gUid,
    "instrument_id": instrument,
    "side": side,
    "amount":amount,
    "value": value,
    "from_service_id": 'main_wallet',
    "from_account_id": userId,
    "to_service_id": 'card_service',
    "to_account_id": 'system',
    "metadata": "{\"reference\": \"ref_001\"}"
    }
    });
  });
});
Cypress.Commands.add('topUpUserWallet', (userId,instrument,amount) => {
  cy.generateGuid().then((gUid) => {
  cy.request({
    method: 'POST',
    url: Cypress.env('asset_manager_url')+'/api/deposit',
    body: {
      "service_id": "main_wallet",
      "account_id": userId,
      "product_id": instrument,
      "amount": amount,
      "source": "test",
      "source_ref": "test",
      "ref_caller": "test",
      "ref_action": "deposit",
      "ref_id": gUid,
      "idempotent_key": gUid
    }
  });
});
});

Cypress.Commands.add('apiLogin', (query, user, pass) => {
  cy.request({
    method: 'POST',
    url: Cypress.env('api_url'),
    body: {
      query: query,
      variables: {
        signInData: {
          email: user,
          password: pass,
        },
      },
    },
    failOnStatusCode: false,
  }).then((res) => {
    let token = res.body.data.signIn.token;
    window.localStorage.setItem('zmToken', res.body.data.signIn.token);
    window.localStorage.setItem('token', res.body.data.signIn.aptoken);
    return token;
  });
});
