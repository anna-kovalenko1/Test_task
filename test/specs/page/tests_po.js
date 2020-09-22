class TestsSahiproPage{
    get googleSearchField() {return $('//input[@name = "q"]')} 
    get sahiProLink() {return $('//h3[contains(text(),"Sahi Pro vs Selenium | Sahi Pro - Accomplish automation with ...")]')};
    get topLink() {return $(`.site-logo.resp-hide.m-logo`)};
    get pricingLink() {return $('//a[@href = "https://sahipro.com/pricing/"]')}
    get prices() {return $$('b')}
    get pricingPageHeadline() {return $('//em[contains(text(), "Pricing")]')}
    get typeOfLicense() {return $$('.license-item')}
    get footer() {return $('//footer[@class="black-color-bg"]')};
    get salesEmail() {return $('//span[contains(text(),"Sales")]//a')};
    get supportEmail() {return $('//span[contains(text(),"Support ")]//a')};
    get phone() {return $('//span[contains(text(),"Phone")]//a')};
    get checkDatabaseIconPlan() {return $$('//li[@class="plan-category-item"][1]/span/*')}
    get checkFilesystemIconPlan() {return $$('//li[@class="plan-category-item"][2]/span/*')}
    get checkWebAplicationAcrossIconPlan() {return $$('//li[@class="plan-category-item"][3]/span/*')}
    get checkWebAplicationOnMobileIconPlan() {return $$('//li[@class="plan-category-item"][4]/span/*')}
    get checkWebAplicationInChromiumIconPlan() {return $$('//li[@class="plan-category-item"][5]/span/*')}
}

module.exports = TestsSahiproPage;
