const TestsSahiproActions = require('./actions/tests_pa');
const data = require('../../testData.json');

const assert = require('assert');
const pageSteps = new TestsSahiproActions();

describe('Automation tests SahiPro', () => {
    const sahiProWeb = 0
    const sahiProDesktop = 1
    const sahiProMobile = 2
    const sahiProSAP = 3

    const userLicense = 0
    const concurentLicense = 1
    const runnerLicense = 2

    let previousPrice = 0

    it('should find and open sahiPro website', () => {
        pageSteps.searchInGoogle(data.searchRequest);
        pageSteps.chooseSearchResult();
        assert.equal(browser.getTitle(), data.sahiProTitle);
    });

    it('should open top link for the website', () => {
        pageSteps.clickFeaturesLink();
        assert.equal( pageSteps.getTextFromFeaturesPageHeadlin(), data.featuresPageHeadline);
    });

    it('should return various information about the company: the sales email, support email, and phone number from the footer', () => {
        pageSteps.scrollToFooter();
        pageSteps.getSalesEmail();
        pageSteps.getSupportEmail();
        pageSteps.getPhone();
        assert.equal(pageSteps.getSalesEmail(), data.salesEmail);
        assert.equal(pageSteps.getSupportEmail(), data.supportEmail);
        assert.equal(pageSteps.getPhone(), data.phone);
    });

    it('should open "Pricing" link', () => {
        pageSteps.clickPricingLink();
        assert.equal( pageSteps.getPricingPageHeadline(), data.pricingPageHeadline);
    });
   
    it('should changes prices if select the various license types', () => {
        previousPrice = pageSteps.getPrices(sahiProWeb); 
        pageSteps.chooseTypeOfLicense(concurentLicense);
        assert.notEqual( pageSteps.getPrices(sahiProWeb), previousPrice);
        previousPrice = pageSteps.getPrices(sahiProDesktop);
        pageSteps.chooseTypeOfLicense(runnerLicense); 
        assert.notEqual( pageSteps.getPrices(sahiProDesktop), previousPrice);
        previousPrice = pageSteps.getPrices(sahiProMobile); 
        pageSteps.chooseTypeOfLicense(userLicense);
        assert.notEqual( pageSteps.getPrices(sahiProMobile), previousPrice);
        previousPrice = pageSteps.getPrices(sahiProSAP);
        pageSteps.chooseTypeOfLicense(concurentLicense);
        assert.notEqual( pageSteps.getPrices(sahiProSAP), previousPrice);
        
    });


  
 it('should have different possibilities for the different plans', () => {
   
    });

        
      
    
});


