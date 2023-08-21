describe('SauceDemo Test', () => {

    it('TC001 - SauceDemo sayfasina git ve basligi dogrula testi', () => {

        cy.visit('https://saucedemo.com/')
       // cy.title().should('eq', 'Swag Labs')
         cy.wait(1000)
    });

    it('TC002 - SauceDemo Basarisiz login testi', () => {
           
        // cy.visit('https://www.saucedemo.com/')
        cy.wait(1000)

          cy.xpath("//*[@id='user-name']").type('standard_user')

         cy.xpath("//*[@id='password']").type('secret_sauce')
         cy.xpath("//*[@id='login-button']").click()
      

       });

 

});