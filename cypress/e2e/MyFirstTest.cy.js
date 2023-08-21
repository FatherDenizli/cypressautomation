       describe('My First Test', () =>{   
    it('Test1-verify title-positive', () => {
    
        
        cy.visit("https://lms.techproeducation.com/")
        cy.wait(10000);
          
      
    });

    it('Test2-verify-negative test', () => {
       cy.wait(5000);
    cy.xpath("//*[@data-ccn='button_text_1']").click();
     
    
      });

 



     })
    
    

 
    

 


  