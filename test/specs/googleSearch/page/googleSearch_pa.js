const  GoogleSearchPage = require('./googleSearch_po')


const page = new GoogleSearchPage();

class GoogleSearchActions{

    searchInGoogle(searchRequest){
        browser.maximizeWindow();
        browser.url('https://www.google.com/');
        page.googleSearchField.waitForDisplayed(2000);
        page.googleSearchField.setValue(searchRequest);
        browser.keys('Enter');        
    }
}
module.exports = GoogleSearchActions;