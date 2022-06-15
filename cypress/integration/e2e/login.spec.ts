//login.spec.ts file is based on typescript
//It will fetches records from support folders
//That is from app.ts and userActions.ts
describe('To Visit the Home & login page', () => {
    it('To Visit the Homepage', () => {
        cy.visitHomepage()
        cy.signin()
    })
    it('To Visit LoginPage and Signin', () => {
        cy.visitLoginpage()
        cy.tocheckloginpage()
        cy.login('TestUsername', 'TestPassword')
    })
})