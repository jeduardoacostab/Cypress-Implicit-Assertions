

describe("Assertions demo", () => {

    it("Implicit assertions", () => {

        cy.visit("https://auth.applitools.com/users/login")

        // Uses of Should - and

        //cy.url().should('include', 'auth.applitools.com')
        //cy.url().should('eq', 'https://auth.applitools.com/users/login')
        //cy.url().should('contain', 'applitools')

        /*cy.url().should('include', 'auth.applitools.com')
        .should('eq', 'https://auth.applitools.com/users/login')
        .should('contain', 'applitools')*/

        /*cy.url().should('include', 'auth.applitools.com')
        .and('eq', 'https://auth.applitools.com/users/login')
        .and('contain', 'applitools')*/

        /*cy.url().should('include', 'auth.applitools.com')
        .and('eq', 'https://auth.applitools.com/users/login')
        .and('contain', 'applitools')
        .and('not.contain', 'compitools')*/

        /*cy.title().should('include', 'Sign')
        .and('eq', 'Sign in | Applitools')
        .and('contain', 'in')

        cy.get('.logo').should('be.visible')
        .and('exist')*/

        /*cy.xpath("//a").should('have.length','6')*/

        cy.get("input[placeholder='Enter email']").type("Admin")
        cy.get("input[placeholder='Enter email']").should('have.value', 'Admin')

    })
})