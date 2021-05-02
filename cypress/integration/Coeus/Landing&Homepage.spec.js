describe('Visit the landingpage', function () {

    it('it visits the URL', function () {
        cy.visit("http://localhost:3000/");
        cy.contains('Login with Google').should('be.visible')
    })

    it('Click on colormode Button', function () {
        cy.get('body > button:nth-child(6)').click();
    })

    it('Locate the Login Button', function () {
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen')
        })
        cy.get('.login__button').click();

    })

    it('Opens new window', function () {
        cy.get('.navbar__header').contains('Coeus News Portal')
        cy.get('.search').clear().type('Technology')
        cy.get('.submit').click();
        cy.wait(3000)
        cy.scrollTo('bottom')
        cy.get('.darkmode-toggle--white').should('be.visible').click()
        cy.get('a').contains('Entertainment').click()
        cy.wait(3000).scrollTo('bottom')
        //Location category check 
        cy.get('a').contains('Birmingham').click()
        cy.wait(3000).scrollTo('bottom')
        cy.get('a').contains('Oxford').click()
        cy.wait(3000).scrollTo('bottom')
    })

    it('checking the National News',()=>{
        cy.get('a').contains('National').click()
        cy.wait(3000)
    })


    it('checking the logout button', function () {
        cy.get('.logout__button').click()
    })

})



