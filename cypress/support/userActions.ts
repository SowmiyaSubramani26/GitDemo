declare namespace Cypress{
    interface Chainable{
       /**
         * @param username
         * @param password
         */
        signin(): Chainable<Element>
        login(username: string, password: string): Chainable<Element>    
        tocheckloginpage():Chainable<Element> 
       
    }
}
Cypress.Commands.add('signin',()=>{
    cy.contains('Signin').click()
})
Cypress.Commands.add('tocheckloginpage',()=>{
    cy.url().should('include','login.html')
})
Cypress.Commands.add('login',(username,password)=>{
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.contains('Sign in').click() 
})
