/*
Then(/^I should see 'main_slider' element$/, function () {
    let self = this;
    return Promise.resolve()
        .then(()=>{
            return self.driver.wait(()=>{
                return self.driver.findElements(By.css('.caroufredsel_wrapper'))
                    .then((arr)=>{
                        return arr.length > 0;
                    })
            },5000)
        })
        .then(function () {
            let el = self.driver.findElement(By.css('.caroufredsel_wrapper'))
            return self.driver.wait(until.elementIsVisible(el), 15000);
        })

        .then(()=>{
            return self.driver.findElement(By.css('.caroufredsel_wrapper')).isDisplayed()
        })
        .then((is)=>{
            if(!is) throw new Error('non visible');
        })
});


When(/^I click '(.+)' link$/, function (link) {
    let self = this;
    let el;
    console.log(link + '+++++++++++');
    return Promise.resolve()
        .then(function () {
            return self.driver.findElements(By.css('a[href="/products?category=Aceon"]'))
        })
        .then(function (arr) {
            el = arr[1];
            return self.driver.wait(until.elementIsVisible(el), 10000);
        })
        .then(() => {
            return el.click();
        });
});


Then(/^I should see 'Products: Aceon' title$/, function () {
    return Promise.resolve()
        .then(()=>{
            return this.driver.wait(()=>{
                return this.driver.findElements(By.xpath("//!*[contains(text(), 'Products: Aceon')]"))
                    .then((arr)=>{
                        return arr.length > 0;
                    })
            },5000)
        })
        .then(()=>{
            return this.driver.findElement(By.xpath("//!*[contains(text(), 'Products: Aceon')]")).isDisplayed()
        })
        .then((is)=>{
            if(!is) throw new Error('non visible');
        })
});


When(/^I click '(.+)' button$/, function (button) {
    let self = this;
    let el;
    console.log(button + '+++++++++++');
    return Promise.resolve()
        .then(function () {
            return self.driver.findElements(By.css('a[href="/login"]'))
        })
        .then(function (arr) {
            el = arr[1];
            return self.driver.wait(until.elementIsVisible(el), 15000);
        })
        .then(()=>{
            return el.click()
        })

});


Then(/^I should see 'Registered Customer' title$/, function () {
    let self = this;
    return Promise.resolve()
        .then(()=>{
            return self.driver.wait(()=>{
                return self.driver.findElements(By.xpath("//!*[contains(text(), 'Registered Customer')]"))
                    .then((arr)=>{
                        return arr.length > 0;
                    })
            },5000)
        })
        .then(function () {
            let el = self.driver.findElement(By.xpath("//!*[contains(text(), 'Registered Customer')]"))
            return self.driver.wait(until.elementIsVisible(el), 15000);
        })

        .then((is)=>{
            if(!is) throw new Error('non visible');
        })
});
When(/^I input 'Email' into the field$/, function () {
    let self = this;
    let el;
    return Promise.resolve()
        .then(function () {
            return self.driver.findElement(By.id("UserName"));
        })
        .then(function (arr) {
            el = arr;
            return self.driver.wait(until.elementIsVisible(el), 15000);
        })
        .then(() => {
            return el.sendKeys('m.kulsha@aisnovations.com');
        });
});

When(/^I click 'Remember me on this computer' checkbox$/, function () {
    let self = this;
    let el;
    return Promise.resolve()
        .then(function () {
            return self.driver.findElement(By.css("label[for=rememberMe]"))
        })
        .then(function (arr) {
            el = arr;
            return self.driver.wait(until.elementIsVisible(el), 15000);
        })
        .then(() => {
            return el.click();
        });
});

When(/^I input 'Password' into the field$/, function () {
    let self = this;
    let el;
    return Promise.resolve()
        .then(function () {
            return self.driver.findElements(By.id("Password"))
        })
        .then(function (arr) {
            el = arr[0];
            return self.driver.wait(until.elementIsVisible(el), 15000);
        })
        .then(() => {
            return el.sendKeys('marina0708');
        });
});
When(/^I click 'submit'$/, function () {
    let self = this;
    let el;
    return Promise.resolve()
        .then(function () {
            return self.driver.findElements(By.css("button[type=submit]"))
        })
        .then(function (arr) {
            el = arr[2];
            return self.driver.wait(until.elementIsVisible(el), 15000);
        })
        .then(() => {
            return el.click();
        })
        .then(() => {
            return self.driver.sleep(5000)
        });

});

Then(/^I should see 'log out' title on the button$/, function () {
    let self = this;
    let el;
    return Promise.resolve()
        .then(()=>{

            return self.driver.findElements(By.css('a[href="/logout"]'))
        })
        .then(function (arr) {
            el = arr[1];
            return self.driver.wait(until.elementIsVisible(el), 15000);
        })
        .then((is)=>{
            if(!is) throw new Error('non visible');
        })
});

*/
