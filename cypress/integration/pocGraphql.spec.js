
///#https://lucasconstantino.github.io/graphiql-online/

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
  
  it("test graphql multation", () => {
    const mutation = `mutation{
          createComment(text:"1223")
          {
             id
             createdAt   
             text  
            }
    }`;
    cy.request({
      method: "POST",
      url: "https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex",
      body: { query: mutation },
      failOnStatusCode: false,
    }).then((res) => {
      cy.log(res);
    });
  });
  