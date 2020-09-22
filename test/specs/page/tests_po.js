class TestsSahiproPage{
    get googleSearchField() {return $('//input[@name = "q"]')} 
    get sahiProLink() {return $('//h3[contains(text(),"Sahi Pro | Test Automation for Web, Web services,")]')};
    get featuresLink() {return $('//a[@href = "https://sahipro.com/features/"]')}
    get featuresPageHeadline() {return $('//em[contains(text(),"Sahi Pro Features")]')}

    get pricingLink() {return $('//a[@href = "https://sahipro.com/pricing/"]')}
    get prices() {return $$('b')}
    get pricingPageHeadline() {return $('//em[contains(text(), "Pricing")]')}
    get typeOfLicense() {return $$('.license-item')}
    get footer() {return $('//footer[@class="black-color-bg"]')};
    get salesEmail() {return $('//span[contains(text(),"Sales")]//a')};
    get supportEmail() {return $('//span[contains(text(),"Support ")]//a')};
    get phone() {return $('//span[contains(text(),"Phone")]//a')};
    get checkIcons() {return $$('//i[@class = "fa fa-check"]')};
    get plansColumns() {return $$('//div[@class = "class="pricing-type-item")]')};
    get checkDatabaseIconPlan() {return $$('//li[@class="plan-category-item"][1]/span/*')}
    get checkFilesystemIconPlan() {return $$('//li[@class="plan-category-item"][2]/span/*')}
    get checkWebAplicationAcrossIconPlan() {return $$('//li[@class="plan-category-item"][3]/span/*')}
    get checkWebAplicationOnMobileIconPlan() {return $$('//li[@class="plan-category-item"][4]/span/*')}
    get checkWebAplicationInChromiumIconPlan() {return $$('//li[@class="plan-category-item"][5]/span/*')}
}

module.exports = TestsSahiproPage;
