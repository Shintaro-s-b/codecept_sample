exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://kids.yahoo.co.jp/',
      chrome: {
        args: ['--no-sandbox','--disable-setuid-sandbox']
      },
    },
  },
  plugins: {
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
    },
  },
  translation: './ja-SR.js',
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'onegai'
}
