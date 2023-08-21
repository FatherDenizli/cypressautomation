describe('Deneme1', function () { 

    it('Google Page', function () { 
    
        cy.visit('https://www.google.ca')

        cy.title().should('eq', 'Google')
        cy.get('.gb_Ad').click()// Click on button
      //   cy.contains('[class="gb_Ad"]','Sign in').click()
        
    })
//      it('Click Sign In Button', function () {     
        
        
//         cy.get('.gb_Ad').click()// Click on button
        
// })
})