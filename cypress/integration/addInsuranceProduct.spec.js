
import SELECTORS from '../enum/selector';
describe('Rabbit finance test', () => {
	describe('The user can select insurance product IPD/OPD correctly', () => {
		before(() => {
			cy.visit('/en/product/health-insurance/questions');	
		});
		it('The user can select product IPD/OPD and get the data correctly', () => {
            cy.intercept('GET', '**/product/health-insurance/quotes.json', {
                statusCode: 401,
                
            }).as('bypass');
            
            cy.get(SELECTORS.IPD_LABEL).click();
            cy.get(SELECTORS.SALARYMAN_LABEL).click();
            cy.percySnapshot('Test');
            cy.get('[name="customer_nationality"]').select('Thailand').should('have.value','A102');
            cy.get(SELECTORS.INPUT_PHONE_NUMBER).type('0982705677');
            cy.get(SELECTORS.BUTTON_NEXT_PHONE_NUMBER).click();
            cy.get(SELECTORS.INPUT_FIRST_NAME).type('note');
            cy.get(SELECTORS.INPUT_LAST_NAME).type('notetest');
            cy.percySnapshot('Test');
            cy.get(SELECTORS.BUTTON_NEXT_NAME).click();
            cy.get(SELECTORS.INPUT_EMAIL).type('note@hotmail.com');
            cy.get('#customer_email > :nth-child(2) > .col-12 > .btn').click();
            cy.get(SELECTORS.BUTTON_GENDER_MALE).click();
            cy.get(SELECTORS.INPUT_DATE).type('260497');
            cy.get(SELECTORS.BUTTON_NEXT_DATE).click();
            cy.get(SELECTORS.CONSENT).click();
            cy.get(SELECTORS.BUTTON_CONFIRM_CONSENT).click();

            cy.wait('@bypass').its('response.statusCode').should('eq', 401);
        
            cy.get(SELECTORS.DROP_DOWN_HEALTH_CATEGORY).select('IPD/OPD').should('have.value', 'ipdOpd');
            cy.get(SELECTORS.DROP_DOWN_TYPE).eq(2).select('Salary man').should('have.value', 'salaryMan');
            cy.get(SELECTORS.BUTTON_APPLY).click();

		});
		});
        describe('The user can select insurance product Specific Disease correctly', () => {
            before(() => {
                cy.visit('/en/product/health-insurance/questions');
                    
            });
            it('The user can select product Specific Disease and get the data correctly', () => {
                cy.intercept('GET', '**/product/health-insurance/quotes.json', {
                    statusCode: 401,
                    
                }).as('bypass');
                cy.
                cy.get(SELECTORS.BUTTON_DISEASE).click();
                cy.get(SELECTORS.BUTTON_OFFICE_SYDROME).click();
                cy.get('[name="customer_nationality"]').select('Thailand').should('have.value','A102');
                cy.get(SELECTORS.INPUT_PHONE_NUMBER).type('0982705677');
                cy.get(SELECTORS.BUTTON_NEXT_PHONE_NUMBER).click();
                cy.get(SELECTORS.INPUT_FIRST_NAME).type('note');
                cy.get(SELECTORS.INPUT_LAST_NAME).type('notetest');
                cy.get(SELECTORS.BUTTON_NEXT_NAME).click();
                cy.get(SELECTORS.INPUT_EMAIL).type('note@hotmail.com');
                cy.get('#customer_email > :nth-child(2) > .col-12 > .btn').click();
                cy.get(SELECTORS.BUTTON_GENDER_MALE).click();
                cy.get(SELECTORS.INPUT_DATE).type('260497');
                cy.get(SELECTORS.BUTTON_NEXT_DATE).click();
                cy.get(SELECTORS.CONSENT).click();
                cy.get(SELECTORS.BUTTON_CONFIRM_CONSENT).click();
                cy.wait('@bypass').its('response.statusCode').should('eq', 401);

                cy.get(SELECTORS.DROP_DOWN_HEALTH_CATEGORY).select('Specific Disease').should('have.value', 'disease');
                cy.get(SELECTORS.DROP_DOWN_TYPE).eq(2).select('Office syndrome').should('have.value', 'officialSyndrome');
                cy.get(SELECTORS.BUTTON_APPLY).click();
            });

        });

        describe('The user can select insurance product personal accident correctly', () => {
            before(() => {
                cy.visit('/en/product/health-insurance/questions');
                    
            });
            it('The user can select product personal accident and get the data correctly', () => {
                cy.intercept('GET', '**/product/health-insurance/quotes.json', {
                    statusCode: 401,
                    
                }).as('bypass');

                cy.get(SELECTORS.BUTTON_PA).click();
                cy.get(SELECTORS.BUTTON_EXTREME_SPORT).click();
                cy.get('[name="customer_nationality"]').select('Thailand').should('have.value','A102');
                cy.get(SELECTORS.INPUT_PHONE_NUMBER).type('0982705677');
                cy.get(SELECTORS.BUTTON_NEXT_PHONE_NUMBER).click();
                cy.get(SELECTORS.INPUT_FIRST_NAME).type('note');
                cy.get(SELECTORS.INPUT_LAST_NAME).type('notetest');
                cy.get(SELECTORS.BUTTON_NEXT_NAME).click();
                cy.get(SELECTORS.INPUT_EMAIL).type('note@hotmail.com');
                cy.get('#customer_email > :nth-child(2) > .col-12 > .btn').click();
                cy.get(SELECTORS.BUTTON_GENDER_MALE).click();
                cy.get(SELECTORS.INPUT_DATE).type('260497');
                cy.get(SELECTORS.BUTTON_NEXT_DATE).click();
                cy.get(SELECTORS.CONSENT).click();
                cy.get(SELECTORS.BUTTON_CONFIRM_CONSENT).click();
                cy.wait('@bypass').its('response.statusCode').should('eq', 401);

                cy.get(SELECTORS.DROP_DOWN_HEALTH_CATEGORY).select('Personal Accident').should('have.value', 'pa');
                cy.get(SELECTORS.DROP_DOWN_TYPE).eq(2).select('Extreme sport accidents').should('have.value', 'extremeSportAccidents');
                cy.get(SELECTORS.BUTTON_APPLY).click();
            });

        });
		
});