describe('On Saucedemo', () => {

    it('Test login with standard user', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click();
        cy.get('.shopping_cart_link').should('exist');

    })

    it('Test Logout', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
        cy.get('.login_wrapper-inner').should('exist');

    })

    it('Test login with wrong user and password and check if we get error', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('[data-test="username"]').type('usergresit')
        cy.get('[data-test="password"]').type('parolagresita')
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('exist');

    })

    it('Test if the right menu will open', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('.bm-item-list').should('exist');
        cy.get('#react-burger-cross-btn').click();
        cy.get('#react-burger-menu-btn').should('exist');

    })

    it('Test if you can add product in cart', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('.cart_item').should('exist');

    })

    it('Test if you can remove a product from cart', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('.cart_item').should('exist');
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('.cart_item').shouldnot('exist');

    })

})
