require('chromedriver');
let seleniumWebdriver = require('selenium-webdriver');
let {defineSupportCode} = require('cucumber');
let {expect} = require('chai');

function CustomWorld() {
    this.driver = new seleniumWebdriver.Builder()
        .forBrowser('chrome')
        .build();
    global.By = seleniumWebdriver.By;
    global.until = seleniumWebdriver.until

}

defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(CustomWorld)
});

//module.exports = function() {
// this.CustomWorld = CustomWorld;
//};