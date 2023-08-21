/// <reference types="Cypress" />

describe('Sauce LOgin Page Testing', () => {

    it('TC001 Go to SauceDemo page and validate title', () => {
       
        cy.visit('https://www.saucedemo.com');

       // cy.title().should('eq', 'Swag Labs');

    });
     
    // it('TC002 SauceDemo Negative Login Test', () => {

    //     cy.get('input[name="username"]').type('testuser'); //username
    //     cy.get('input[name="password"]').type('<PASSWORD>');//password
    //     cy.get('button[type="submit"]').click();//login button
        
    // });


    
});