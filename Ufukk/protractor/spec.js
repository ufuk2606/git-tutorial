// spec.js
describe('Smoke test', function() {
  it('Should get a new page', function() {
    browser.ignoreSynchroniyation = true ;
    browser.get('http://www.lego.com');
    browser.sleep(3000);
    browser.refresh();
    browser.sleep(2000);
    browser.get('http://www.bbc.com');
    browser.sleep(1000);
    browser.navigate().back();
    browser.sleep(1000);

  });
});