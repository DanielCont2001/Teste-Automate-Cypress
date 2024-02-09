describe('On Wikipedia', () => {

    it('Test search bar', () => {
        cy.visit('https://www.wikipedia.org');
        cy.get('#searchInput').click().type('Elizabeth II');
        cy.get('.pure-button').click();
        cy.get(':nth-child(7) > b').should('exist');

    })

    it('Test audio button', () => {
        cy.visit('https://en.wikipedia.org/wiki/Elizabeth_II');
        cy.get('#mw-indicator-spoken-icon > .mw-parser-output > span > a > .mw-file-element').click();
        cy.get('#file > :nth-child(1) > .mw-tmh-player > .mw-tmh-play > .mw-tmh-play-icon').click();
        cy.get('#file > :nth-child(1)').should('exist');
        cy.get(':nth-child(6) > :nth-child(2) > p > b').should('exist');


})

})