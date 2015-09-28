var base = 'http://localhost:' + (process.env.PORT || 8080);

module.exports = {
  'lol': function(browser) {
    browser.url(base)
    .end();
  }
};
