let {defineSupportCode} = require('cucumber');
let {expect} = require('chai');

defineSupportCode(function({Given, When, Then}) {

    When(/^I go to '(.+)'$/, function (uri) {
        return this.driver.get(uri)
    });
   When(/^I click '(.+)' element$/, function (name) {
        let items = {
            'Aceon':By.xpath('.//body/descendant::a[@href="/products?category=Aceon"][2]'),
            'Log in':By.xpath('.//body/descendant::a[@href="/login"][2]'),
            'Remember Me on this computer':By.css("label[for=rememberMe]"),
            'Submit': By.xpath('/html/body/div[3]/div[2]/div[1]/div/div[2]/div/div[2]/form/div[5]/button')
            };
        let self = this;
        let el;
        return Promise.resolve()
        .then(function () {
            el = self.driver.findElement(items[name]);
            return self.driver.wait(until.elementIsVisible(el), 15000);
        }).then(() => {
            return el.click();
        })

    });
   When(/^I input '(.+)' value$/, function (name) {

        let values = {
            'Email': {
                selector: By.id("UserName"),
                value: 'm.kulsha@aisnovations.com'
            },
            'Password': {
                selector: By.id("Password"),
                value: 'marina0708'
            }
        };
        let self = this;
        let el;
        return Promise.resolve()
            .then(function () {
                return self.driver.findElement(values[name].selector);
            })
            .then(function (arr) {
                el = arr;
                return self.driver.wait(until.elementIsVisible(el), 15000);
            })
            .then(() => {
                return el.sendKeys(values[name].value);
            });
    });

    Then(/^I should see '(.+)' element on page$/, function (name) {
        let data = {
            'Registered Customer': {
                selector:By.xpath(".//*[contains(text(), 'Registered Customer')]"),
                elText: 'Registered Customer'},
            'log out': {
                selector: By.xpath('.//body/descendant::a[@href="/logout"][2]'),
                elText:'Log out'},
            'Products: Aceon': {
                selector:By.xpath("//*[contains(text(), 'Products: Aceon')]"),
                elText:'Products: Aceon'},
            'main_slider': {selector:By.css('.caroufredsel_wrapper')}

        };
        let self = this;
        return Promise.resolve()
            
            .then(function () {
                let el = self.driver.findElement(data[name].selector)
                return self.driver.wait(until.elementIsVisible(el), 15000);
            })
            .then(function(){
                if(data[name].elText){
                    return self.driver.findElement(data[name].selector).getText();
                }
            })
            .then((text)=>{
                if(text){
                    // if(text !== data[name].elText ) throw new Error('non visible');
                    expect(text).to.equal(data[name].elText);
                }
            });
    });
});

