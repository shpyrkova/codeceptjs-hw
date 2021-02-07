const { I } = inject();
 
module.exports = {
    // setting locators
    fields: {
        registerEmail: '#register-email',
        registerName: '#register-displayName',
        registerPassword: '#register-password'
    },

    agreementCheckbox: '#accept-agreement',

    buttons: {
        registration: '[type=button][data-switch="register-form"]',
        doRegister: 'Зарегистрироваться'
    },
 
    // introducing methods
    sendEmailForRegister(email, name, password) {
      I.click(this.buttons.registration);
      I.fillField(this.fields.registerEmail, email);
      I.fillField(this.fields.registerName, name);
      I.fillField(this.fields.registerPassword, password);
      I.checkOption(this.agreementCheckbox)
      I.click(this.buttons.doRegister);
    },

}