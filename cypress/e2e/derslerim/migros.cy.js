describe('Cimri Site Testi', () => {
    
 
    beforeEach(() => {
    
       //Her test oncesinde Hepsiburada ssitesine gider.
        cy.visit("https://www.migros.com.tr/")
       // cy.get('.settings').click();
        
    });


  /*  afterEach(() => {
    //Her test sonrasinda sayfayi yenile.
    
        cy.reload();
        // cy.get('.settings').click();

});*/

    
    it('Ana sayfanin acildigi dogrulanmalidir.', () => {

        //Validate URL

        cy.url().should('eq', 'https://www.migros.com.tr/');

        //Validate Title

        cy.title().should('include', 'Migros Sanal Market:');
        
    });

    it('Arama yapilmalidir ve sonuclar dogrulanmalidir', () => {
    
     

        cy.get('#product-search-combobox--trigger').type('Snickers{enter}'); 
      //  cy.get('#product-search-combobox--trigger').type('Snickers'); 
        cy.wait(3000)
      //  cy.contains("Snickers Yer Fıstıklı 2'li Çikolata 80 G").click({force:true});

    });
    




});