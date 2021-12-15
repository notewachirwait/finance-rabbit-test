///#https://lucasconstantino.github.io/graphiql-online/
import { userVipLevel3 } from "../userInformation/userData";
import { userSignIn } from "../schema/schema";
let token;
const urlZ = Cypress.env("api_url");
it("test api", () => {
  const name = "wachirawit.th@ku.th";
  cy.log(Cypress.env("test"));
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

it("login user zipmex", () => {
  cy.apiLogin(userSignIn, userVipLevel3.username, userVipLevel3.password).then(
    (tokenUser) => {
      token = tokenUser;
    }
  );
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
      Authorization: "Bearer " + token,
    },
    body: { query: query },

    failOnStatusCode: false,
  }).then((res) => {
    cy.log(res.body.data.bankAccounts);
  });
});
