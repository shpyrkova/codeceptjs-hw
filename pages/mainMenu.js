const { I } = inject();
 
module.exports = {
    // setting locators
    buttons: {
        profile: '.sitetoolbar__login'
    },

    links: {
      tests: 'a[href="/quiz"]'
    },
 
    // introducing methods
    openLoginForm() {
      I.click(this.buttons.profile);
    },

    goToTests() {
      I.click(this.links.tests);
    }

}