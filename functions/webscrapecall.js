const { webscrappingFirstPost, webscrappingTopics } = require("../components/webscrapes/websites");
const { saveFirstPost, saveTopics } = require("../controllers/webscrapesController")

// urls for weclick4pdf website
const weclick4pdfUrl = "https://weclick4pdf.com/";
const weclick4pdfInsuranceUrl = "https://weclick4pdf.com/category/insurance/";
const weclick4pdfGasUrl = "https://weclick4pdf.com/category/gas/";
const weclick4pdfDoctoralUrl = "https://weclick4pdf.com/category/doctoral-program/";
const weclick4pdfCarAccidentsUrl = "https://weclick4pdf.com/category/care-accidents/";
const weclick4pdfPersonalFinanceUrl = "https://weclick4pdf.com/category/personal-finance/";
const weclick4pdfInvestingUrl = "https://weclick4pdf.com/category/investing/";

//  urls for pyithubawa website
const pyithubawaUrl = "https://pyithubawa.com/";
const pyithubawaActivityUrl = "https://pyithubawa.com/category/lifestyle/activity/";
const pyithubawaBeautyUrl = "https://pyithubawa.com/category/beauty/";
const pyithubawaWorldUrl = "https://pyithubawa.com/category/world/";
const pyithubawaGeneralUrl = "https://pyithubawa.com/category/example-1/page/2/";
const pyithubawaFitnessUrl = "https://pyithubawa.com/category/sports/page/2/";

// call websites scraping functions for weclick4pdf website
const webscrapeWeclick4pdf = () => {
    webscrappingFirstPost(weclick4pdfUrl, 'weclick4pdf')
        .then(dataObj => {
            saveFirstPost(dataObj, 'weclick4pdf');
        })
        .catch(console.error)

    webscrappingTopics(weclick4pdfInsuranceUrl, 'weclick4pdf', 'insurance')
        .then(dataObj => {
            saveTopics(dataObj, 'weclick4pdf', 'insurance');
        })
        .catch(console.error)

    webscrappingTopics(weclick4pdfGasUrl, 'weclick4pdf', 'gas')
        .then(dataObj => {
            saveTopics(dataObj, 'weclick4pdf', 'gas');
        })
        .catch(console.error)

    webscrappingTopics(weclick4pdfCarAccidentsUrl, 'weclick4pdf', 'car accidents')
        .then(dataObj => {
            saveTopics(dataObj, 'weclick4pdf', 'car accidents');
        })
        .catch(console.error)

    webscrappingTopics(weclick4pdfDoctoralUrl, 'weclick4pdf', 'doctoral program')
        .then(dataObj => {
            saveTopics(dataObj, 'weclick4pdf', 'doctoral program');
        })
        .catch(console.error)

    webscrappingTopics(weclick4pdfPersonalFinanceUrl, 'weclick4pdf', 'personal finance')
        .then(dataObj => {
            saveTopics(dataObj, 'weclick4pdf', 'personal finance');
        })
        .catch(console.error)

    webscrappingTopics(weclick4pdfInvestingUrl, 'weclick4pdf', 'investing')
        .then(dataObj => {
            saveTopics(dataObj, 'weclick4pdf', 'investing');
        })
        .catch(console.error)
}

// call websites scraping functions for pyithubawa website
const webscrapePyithubawa = () => {
    webscrappingFirstPost(pyithubawaUrl, 'pyithubawa')
        .then(dataObj => {
            saveFirstPost(dataObj, 'pyithubawa');
        })
        .catch(console.error)

    webscrappingTopics(pyithubawaActivityUrl, 'pyithubawa', 'activity')
        .then(dataObj => {
            saveTopics(dataObj, 'pyithubawa', 'activity');
        })
        .catch(console.error)

    webscrappingTopics(pyithubawaWorldUrl, 'pyithubawa', 'world')
        .then(dataObj => {
            saveTopics(dataObj, 'pyithubawa', 'world');
        })
        .catch(console.error)

    webscrappingTopics(pyithubawaBeautyUrl, 'pyithubawa', 'beauty')
        .then(dataObj => {
            saveTopics(dataObj, 'pyithubawa', 'beauty');
        })
        .catch(console.error)

    webscrappingTopics(pyithubawaGeneralUrl, 'pyithubawa', 'general')
        .then(dataObj => {
            saveTopics(dataObj, 'pyithubawa', 'general');
        })
        .catch(console.error)

    webscrappingTopics(pyithubawaFitnessUrl, 'pyithubawa', 'fitness')
        .then(dataObj => {
            saveTopics(dataObj, 'pyithubawa', 'fitness');
        })
        .catch(console.error)
}

module.exports = {
    webscrapeWeclick4pdf,
    webscrapePyithubawa
}