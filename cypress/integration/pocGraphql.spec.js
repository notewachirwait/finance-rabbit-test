
///#https://lucasconstantino.github.io/graphiql-online/
let token;
const urlZ =  Cypress.env("urlZ");
it("test api", () => {
  const name = "wachirawit.th@ku.th";
  assert.equal(name, Cypress.env("username"));

    const query = `{
      countries {
        name
        emojiU
        currency
      }
  }`;
    cy.request({
      method: "POST",
      url: "https://countries.trevorblades.com/",
      body: { query },
      failOnStatusCode: false,
    }).then((res) => {
  
      cy.log(res.body.data.countries[1].name);
      expect(res.status).to.eq(200);
    });
  });
  
  it("test graphql query", () => {
    const query = `{
      countries {
        languages {
          name
          native
        }
      }
  }`;
    cy.request({
      method: "POST",
      url: "https://countries.trevorblades.com/",
      body: { query },
      failOnStatusCode: false,
    }).then((res) => {
  
      cy.log(res.body.data.countries[1].languages[0].native);
      cy.log(res.body.data.countries[1].languages[0].name);
      expect(res.status).to.eq(200);
    });
  });

  it("test graphql query", () => {
    const mutation = `mutation {
      signIn(input:{email:"stg.zm.trader.23+zipstarter+th1@gmail.com"
        ,password: "Abc12345!"})
      {
       __typename
        ... on PreMFA {
          type
      
        }
        ... on Session{
          token
          user {
            features
            invitationCode
            mobileNumber
            personalInfo
            referralCode
            suitabilitySurvey
            userId
          }
        }
      }
    }`;
    cy.request({
      method: "POST",
      url: urlZ,
      body: { query: mutation },
      failOnStatusCode: false,
    }).then((res) => {
      token = res.body.data.signIn.token;
    });

  });
  
  it("User get bank account success", () => {
    const query = `{
      bankAccounts {
      accountName
      bankCode
      isVerified
      }
    }`;
    cy.request({
      method: "POST",
      url: urlZ,
      headers: {
        Authorization: "Bearer " + token
    },
      body: { query: query },
      
      failOnStatusCode: false,
    }).then((res) => {
      cy.log(res.body.data.bankAccounts );
      
    });
  });
  