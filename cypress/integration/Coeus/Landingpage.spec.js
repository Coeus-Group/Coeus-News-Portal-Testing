describe('Visit the landingpage', function () {

    it('it visits the URL', function () {
        cy.visit("/");
        cy.contains('Login with Google').should('be.visible')
    })

    it('Click on colormode Button', function () {
        cy.get('.darkmode-toggle').click();
    })

    it('Locate the Login Button', function () {
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen')
        })
        cy.get('.login__button').click();

    })

    it('Opens new window', function () {
        cy.get('.navbar__header').contains('Coeus News Portal')
        cy.get('.search').clear().type(' Politics')
        cy.get('.submit').click();
        cy.get('a').contains('Business').click()
        cy.wait(3000).scrollTo('bottom')
        cy.get('a').contains('Science').click()
        cy.wait(3000).scrollTo('bottom')
        cy.get('a').contains('Technology').click()
        cy.wait(3000).scrollTo('bottom')
        cy.get('a').contains('Entertainment').click()
        cy.wait(3000).scrollTo('bottom')
        cy.get('a').contains('Science').click()
        cy.wait(3000).scrollTo('bottom')
        cy.get('a').contains('Sports').click()
        cy.wait(3000).scrollTo('bottom')

    })

    it('checking the logout button',function(){
        cy.get('.logout__button').click({force: true})
    })

})



