describe('Urun Ara, Fiyata Gore Sirala ve Sepete Ekle ', function() {
    
 
    beforeEach(() => {
    //ets web sitesine gider
        cy.visit('https://www.etsy.com/');
        cy.url().should('include', 'https://www.etsy.com/');
       

    
});

    it('Sayfanin en altina in ve Apropos gordugunu dogrula ', () => {
    //    cy.wait(10000);
       // Sayfanin en sonuna git "scrollTo"
        cy.scrollTo("bottom");
          //En sonda "About" kelimesini dogrula
        cy.get(':nth-child(3) > .wt-hide-xs').should('contain', 'About');
       // cy.get(':nth-child(3) > .wt-hide-xs').should('be.visible');
        
         cy.wait(2000);
      
  
});

   it('Urun ara', () => {

       cy.scrollTo("top");         
             
   });
    
    it('Filtre Kisminin secenekleri ve calistigini dogrula', () => {

      //  cy.get('[data-menu-title-selected-option=""]').click();
        cy.get('#global-enhancements-search-query').type('bracelet{enter}'); 

        cy.get('#sortby > .wt-menu__trigger').click();

        cy.wait(5000);

        //Siralama seceneklerini tanimla
        const siralamasecenekleri = ['Relevancy','Lowest Price',  'Highest Price', 'Top Customer Reviews', 'Most Recent']
        // Herbir siralama secenegi icin kontrol et ve gorunurlugunu dogrula

        
        siralamasecenekleri.forEach((secenek) => {

            cy.get('#sortby > .wt-menu__body a')
               // cy.get('.wt-menu__trigger > .wt-show-lg')
                
                .contains(secenek)
                
                .should('be.visible')

                .then(() => { 

                 cy.log('"${secenek}" sirama secenegi gorunur.')

                })
             
    
    });






});


});