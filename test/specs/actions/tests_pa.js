const TestsSahiproPage = require('../page/tests_po')


const page = new TestsSahiproPage();

class TestsSahiproActions{

    searchInGoogle(searchRequest){
        browser.maximizeWindow();
        browser.url('https://www.google.com/');
        page.googleSearchField.waitForDisplayed(2000);
        page.googleSearchField.setValue(searchRequest);
        browser.keys('Enter');
    }

    chooseSearchResult(){
        page.sahiProLink.scrollIntoView();
        page.sahiProLink.click();
    }

    clickFeaturesLink(){
        page.featuresLink.waitForDisplayed(2000);
        page.featuresLink.click();
    }


    getTextFromFeaturesPageHeadlin() {
        page.featuresPageHeadline.waitForDisplayed(2000);
        return  page.featuresPageHeadline.getText();
     }

    clickPricingLink(){
        page.pricingLink.waitForDisplayed(2000);
        page.pricingLink.click();
}

    getPricingPageHeadline() {
        page.pricingPageHeadline.waitForDisplayed(2000);
        return page.pricingPageHeadline.getText();
 }

    scrollToFooter(){
        page.footer.waitForDisplayed(2000);
        page.footer.scrollIntoView();
    }


    getSalesEmail(){
        
        return page.salesEmail.getText();
}
    getSupportEmail(){
        
        return page.supportEmail.getText();
}

    getPhone(){
        
        return page.phone.getText();
}


    getPricingHeadline(){
        return page.pricingPageHeadline.getText();
    }

    chooseTypeOfLicense(typeOfLicense){
        page.typeOfLicense[typeOfLicense].waitForDisplayed(2000);
        page.typeOfLicense[typeOfLicense].click();
    }


    getPrices(selectDrivers){    
        return page.prices[selectDrivers].getText();
    }

   


}
module.exports = TestsSahiproActions;