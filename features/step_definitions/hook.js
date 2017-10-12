let {defineSupportCode} = require('cucumber');

defineSupportCode(function({Before,setDefaultTimeout}) {

    setDefaultTimeout(40000);

    Before(function(){
        this.driver.manage().window().maximize();
    });
});
defineSupportCode(function({After,setDefaultTimeout}) {

    setDefaultTimeout(60000);

    After(function() {
        return this.driver.quit();
    });
});