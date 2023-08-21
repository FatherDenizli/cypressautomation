describe('Benim ilk testim', () => {

  it('Amazon sayfasini ziyaret et', () => {
      
    //Tarayiciyi baslatir ve Amazon sayfasini acar

    cy.visit("https://amazon.com.tr/ ")
    //Amazon sayfasi basligini dogrular

    //cy.title().should('eq', 'Amazon.com. Spend less. Smile more.')
                
  })

  it('Arama kutusuna bir urun yaz', () => {

    //Arama kutusuna  "samsung S23 Ultra" yazip enter tusuna basar

    cy.get('#twotabsearchtextbox').type('Samsung S23 Ultra{enter}');
     
  
                    
  })
    it('Ilk urunu sec', () => {
  
      cy.xpath("(//*[@class='s-image'])[1]").click();


  });
    
  it('Ana sayfaya gec', () => {
    //Cypress'te tarayicida geri gitme islemi yapmak icin kullanilir
    cy.go('back');
    cy.go('back');
     //Cypress'te tarayicida ileri gitme islemi yapmak icin cy.go('forward') kullanilir
    cy.go('forward');

    cy.go('back');
  });

  it('Categori secim kutusunda elektroniki sec', () => {
  
  cy.get('#searchDropdownBox').select('Elektronik');//Elektronik kategorisini sec 
    
  });

  it('Profilim secmesine gec', () => {
  
    cy.get('#nav-link-accountList').click();
    
   
});

it('Bir hesap olusturunuz', () => {
  cy.contains('Amazon hesabınızı oluşturun').click();
 
  //Ad-Soyad basligi dogrulamasi yapilacak
  cy.get(':nth-child(1) > :nth-child(2) > .a-form-label').should('contain', 'Ad - Soyad');
  
});
  
  


  
  
  
  

});