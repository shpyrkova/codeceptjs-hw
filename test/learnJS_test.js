const faker = require('faker')
const { I, mainPage, mainMenu, loginForm, quizesPage, articlePage } = inject();

Feature('Learn JavaScript Smoke tests');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('User can find an article by a query', () => {
  mainPage.search('колбэки')
  I.seeElement('a[href="/callbacks"]')
});

Scenario('User can send an email to confirm registration', () => {
  mainMenu.openLoginForm();
  loginForm.sendEmailForRegister(faker.internet.email(), 'test', 'test')
  I.see('С адреса notify@javascript.ru отправлено письмо со ссылкой-подтверждением.')
});

Scenario('User can go to quiz page', () => {
  mainMenu.goToTests();
  I.click(quizesPage.buttons.openTest);
  I.see('Язык JavaScript');
});

Scenario('User can subscribe for updates', () => {
  const email = faker.internet.email().toLowerCase();
  mainPage.subscribe(email);
  I.see(`На адрес ${email} направлен запрос подтверждения.`);
});

Scenario('User can navigate to the next article', () => {
  I.amOnPage('/intro');
  articlePage.navigateToTheNextArticle('/manuals-specifications');
  I.see('Справочники и спецификации');
});