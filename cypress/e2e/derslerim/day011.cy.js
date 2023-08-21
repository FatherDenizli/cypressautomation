describe('Benim ilk testim', () => {
    it('Caypress sayfasini ziyaret et', () => {

        cy.visit("https://amazon.com/")
    
        cy.wait(2000)
 
                
    });

   
    it('Sayfada Kotrol yap', () => { 

     // cy.xpath("//*[@id='sp-cc-accept']").click();
         
         cy.xpath("//*[@data-csa-c-slot-id='nav_cs_1']").click();
 
//      //  cy.get('[href="/gift-cards/b/?ie=UTF8&node=2238192011&ref_=nav_cs_gc"]').click();

       
        
         
    })  
    
       it('Search Nutella', () => {

        cy.xpath("//*[@id='twotabsearchtextbox'] ").type("Nutella");
         cy.xpath("//*[@id='nav-search-submit-text'] ").click();
 
                
    });











    })