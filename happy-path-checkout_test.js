

Feature('Happy path checkout');
Before((I) => {
    I.clearCookie();
    I.amOnPage('https://wiivv.com/');
});

Scenario('Adding item to cart and checking out', (I, homePage) => {
    I.click('//a[contains(text(),\'Shop Sandals\')]');
    // The page objects seemed to really mess with the test. Never figured out why. Left one here commented out to
    // see the usage. Also left on file in as an example
    // homePage.clickShopSandals;
    I.click('.hero-btn:nth-child(1)');
    I.waitForElement('#AddToCart', 10);
    I.click('#AddToCart');
    I.click('//*[@id="add-to-cart-modal"]/div/div/div/p');

    I.waitForElement('#shopify-section-header-blog ul.site-nav-mobile.site-nav-show li:nth-child(2)', 10);
    I.click('#shopify-section-header-blog ul.site-nav-mobile.site-nav-show li:nth-child(2)');

    // asserting that the cart has a total of $129 USD
    I.see('$129 USD');

    I.click('div a.text-link');
    I.waitForElement('div.input-field__flex___1uhNL input#email', 10);
    I.fillField('div.input-field__flex___1uhNL input#email', 'qa_test@gmail.com');
    I.fillField('div.input-field__flex___1uhNL input#password', 'password123');
    I.click('.submit-button__center-text___3eIYv');

    I.waitForElement('input#checkout_shipping_address_first_name', 10);
    I.fillField('input#checkout_shipping_address_first_name', 'Jim');
    I.fillField('input#checkout_shipping_address_last_name', 'Bob');
    I.fillField('input#checkout_shipping_address_address1', '134 Abbott St');
    I.fillField('input#checkout_shipping_address_city', 'Vancouver');
    I.fillField('input#checkout_shipping_address_zip', 'V6B 2K4');
    I.fillField('input#checkout_shipping_address_phone', '6042222222');
    I.click('.step__footer__continue-btn');

    I.click('.step__footer__continue-btn');

    I.seeTitleEquals("Payment method - Wiivv - Checkout" );

    // I don't have a test card so I didn't complete the checkout. At my current job, we get dinged for many
    // invalid/declined checkouts, so to be safe I didn't click checkout to create the error message.

    //Test cleanup
    I.click('#shopify-section-header-blog ul.site-nav-mobile.site-nav-show li:nth-child(2)');
    I.waitForElement('button.js-qty__adjust--minus', 10);
    I.click('button.js-qty__adjust--minus');

    //assert cart is empty
    I.waitForText('$0 USD');
    I.see('$0 USD');
});
