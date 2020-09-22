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



    clickTheTopLink(){
       page.topLink.waitForDisplayed(2000);
        page.topLink.click();
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

    chooseTypeOfLicense(typeOfLicense){
        page.typeOfLicense[typeOfLicense].waitForDisplayed(2000);
        page.typeOfLicense[typeOfLicense].click();
    }

    getPrices(selectDrivers){    
        return page.prices[selectDrivers].getText();
    }

    checkPlansPossibilities(expectedPlansPossibilities,plan){
        const tempIconsColorsArr = this.getIconsColorsArray()
        for(let count = 0; count<tempIconsColorsArr.length; count++){
            if(tempIconsColorsArr[count][plan] !== expectedPlansPossibilities[count][plan]){
                return false
            }
        }
        return true
    }

    getIconsColorsArray(){
        let iconsColors = [[],[],[],[],[]]
        for(let counter = 0; counter<4; counter++){
            iconsColors[0].push(page.checkDatabaseIconPlan[counter].getCSSProperty('color').parsed.hex)
            iconsColors[1].push(page.checkFilesystemIconPlan[counter].getCSSProperty('color').parsed.hex)
            iconsColors[2].push(page.checkWebAplicationAcrossIconPlan[counter].getCSSProperty('color').parsed.hex)
            iconsColors[3].push(page.checkWebAplicationOnMobileIconPlan[counter].getCSSProperty('color').parsed.hex)
            iconsColors[4].push(page.checkWebAplicationInChromiumIconPlan[counter].getCSSProperty('color').parsed.hex)

        }
        return iconsColors
    }
}
module.exports = TestsSahiproActions;
