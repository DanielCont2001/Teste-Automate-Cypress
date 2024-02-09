describe('On Saucedemo', () => {

    it('Test login with standard user', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        .get('[data-test="login-button"]').click();
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
        cy.get('.cart_item').should('not.exist');

    })

    it('Test if you can place a order', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('.cart_item').should('exist');
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('standard');
        cy.get('[data-test="lastName"]').type('user');
        cy.get('[data-test="postalCode"]').type('1234');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
        cy.get('.complete-header').should('exist');

    })

    it('Test to check if you can access the page with the details of a product', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click();
        cy.get('#item_4_title_link > .inventory_item_name').click();
        cy.get('#inventory_item_container').should('exist');
        cy.get('.inventory_details_desc').should('exist');

    })

    it('Test if the "Back to products" button on a product page takes you to homepage', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click();
        cy.get('#item_4_title_link > .inventory_item_name').click();
        cy.get('[data-test="back-to-products"]').click();
        cy.get(':nth-child(2) > :nth-child(1) > #inventory_container').should('exist');

    })

})
