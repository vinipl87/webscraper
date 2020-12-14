const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://www.google.com.br/');
    await driver.findElement(By.name('q')).sendKeys('loucademia de polícia', Key.RETURN);
    await driver.wait(until.elementLocated(By.id('result-stats'))).then(x => {
      driver.findElement(By.id('result-stats')).getText()
        .then(console.log)
        .catch(console.error);

      setTimeout((async function next() { driver.findElement(By.className('XQ6p1d')).click(); }),15000);
       
    }).catch(console.error);
  } finally {
    //await driver.quit();    
  }
})();
