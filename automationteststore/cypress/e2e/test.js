
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
///<reference types= "cypress" /> 
describe('try to registing in the website', () => {
    it('', () => {
        cy.visit("https://automationteststore.com/index.php?rt=account/create")
        //_______________variables________________
        let firstname = Math.random().toString(36).substring(2, 9)
        let finalname ="khaled"
        let email ="A"+Math.random().toString(36).substring(2, 9)+"@gmail.com"
        let password =Math.floor(Math.random() * 100000)
        cy.log(password);
        let address= "amman"
        let country="Jordan"
        let city ="Amman"
        let region="Amman"
        let zcode="11111"
        let userName=firstname+"_"+finalname
        //_______________cy.test_______________
        cy.get('#AccountFrm_firstname').type(firstname)
        cy.get('#AccountFrm_lastname').type(finalname)
        cy.get('#AccountFrm_email').type(email)
        cy.get('#AccountFrm_telephone').type("0777777")
        cy.get('#AccountFrm_address_1').type(address)
        cy.get('#AccountFrm_country_id').select("Jordan")
        cy.get('#AccountFrm_city').type(city)
        cy.get('#AccountFrm_zone_id').select("'Amman")
        cy.get('#AccountFrm_postcode').type(zcode)
        cy.get('#AccountFrm_loginname').type(userName)
        cy.get('#AccountFrm_password').type(password)
        cy.get('#AccountFrm_confirm').type(password)
        cy.get('#AccountFrm_newsletter1').check()
        cy.get('#AccountFrm_agree').check()
        cy.contains("Continue").click()
        cy.get('.maintext').invoke('text').should("include","Created")
        cy.contains("Continue").click()
    });
});