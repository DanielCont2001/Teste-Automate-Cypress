describe('Site Google.com', () => {

    it ('functioneaza cu o cautare basic', () => {
        cy.visit('http://google.com');
        cy.get('#L2AGLb').click();
        cy.get('.gLFyf').type('vlog de it').type('{enter}');

        cy.get('#result-stats').should('exist');


    })

})