const { I } = inject();
 
module.exports = {
    // setting locators
    fields: {
        search: 'input[name=query][placeholder="Поиск по учебнику"]',
        email: 'input[type=email][placeholder="ваш@email"]'
    },

    buttons: {
        search: 'button[type=submit][value="article"]',
        subscribe: 'Подписаться'
    },
 
    // introducing methods
    search(text) {
        I.fillField(this.fields.search, text);
        I.click(this.buttons.search);
    },

    subscribe(email) {
        I.fillField(this.fields.email, email);
        I.click(this.buttons.subscribe);
    }

}