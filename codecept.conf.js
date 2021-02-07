const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './test/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://learn.javascript.ru',
      show: false,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/mainPage.js',
    loginForm: './pages/loginForm.js',
    mainMenu:  './pages/mainMenu.js',
    quizesPage: './pages/quizesPage.js',
    articlePage: './pages/articlePage.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}