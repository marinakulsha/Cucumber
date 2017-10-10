let {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

    When(/^I go to '(.+)'$/, function (uri) {
        return this.driver.get(uri)
    //.then(function(){
            //this.driver.window().maximize();
        //})
    });

    Then(/^I should see 'main_slider' element$/, function () {
        return Promise.resolve()
            .then(()=>{
            return this.driver.wait(()=>{
                return this.driver.findElements(By.css('.caroufredsel_wrapper'))
                    .then((arr)=>{
                    return arr.length > 0;
    })
    },5000)
    })
    .then(()=>{
            return this.driver.findElement(By.css('.caroufredsel_wrapper')).isDisplayed()
        })
    .then((is)=>{
            if(!is) throw new Error('non visible');
    })
    });

    When(/^I click '(.+)' link$/, function (link) {
        let el = this.driver.findElement(By.css('a[href="/products?category=Aceon"]'));
       this.driver.wait(this.until.elementIsNotVisible(el),5000)
            .then(()=>{
        return el.click();

    });
    });

    Then(/^I should see 'Products: Aceon' page$/, function () {

        console.log(arguments)
        return Promise.resolve()
            .then(()=>{
                return this.driver.wait(()=>{
                    return this.driver.findElements(By.css('a[href=/products?category=Aceon]'))
                        .then((arr)=>{
                            return arr.length > 0;
                        })
                },5000)
            })
            .then(()=>{
                return this.driver.findElement(By.css('a[href=/products?category=Aceon]')).isDisplayed()
            })
            .then((is)=>{
                if(!is) throw new Error('non visible');
            })
    });
});