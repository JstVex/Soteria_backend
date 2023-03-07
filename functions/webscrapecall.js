const { webscrappingFirstPost, webscrappingTopics } = require("../components/webscrapes/websites");
const { saveFirstPost, saveTopics } = require("../controllers/webscrapesController")

// urls for weclick4pdf website
const weclick4pdfUrl = "https://weclick4pdf.com/";
const weclick4pdfActivityUrl = "https://weclick4pdf.com/category/lifestyle/activity/";
const weclick4pdfBeautyUrl = "https://weclick4pdf.com/category/beauty/";
const weclick4pdfTravelUrl = "https://weclick4pdf.com/category/travel-tips/";
const weclick4pdfWorldUrl = "https://weclick4pdf.com/category/world/";
const weclick4pdfGeneralUrl = "https://weclick4pdf.com/category/example-1/";
const weclick4pdfFitnessUrl = "https://weclick4pdf.com/category/sports/";

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

    webscrappingTopics(weclick4pdfActivityUrl, 'weclick4pdf', 'activity')
        .then(dataObj => {
            saveTopics(dataObj, 'weclick4pdf', 'activity');
        })
        .catch(console.error)

    webscrappingTopics(weclick4pdfTravelUrl, 'weclick4pdf', 'travel')
        .then(dataObj => {
            saveTopics(dataObj, 'weclick4pdf', 'travel');
        })
        .catch(console.error)

    webscrappingTopics(weclick4pdfWorldUrl, 'weclick4pdf', 'world')
        .then(dataObj => {
            saveTopics(dataObj, 'weclick4pdf', 'world');
        })
        .catch(console.error)

    webscrappingTopics(weclick4pdfBeautyUrl, 'weclick4pdf', 'beauty')
        .then(dataObj => {
            saveTopics(dataObj, 'weclick4pdf', 'beauty');
        })
        .catch(console.error)

    webscrappingTopics(weclick4pdfGeneralUrl, 'weclick4pdf', 'general')
        .then(dataObj => {
            saveTopics(dataObj, 'weclick4pdf', 'general');
        })
        .catch(console.error)

    webscrappingTopics(weclick4pdfFitnessUrl, 'weclick4pdf', 'fitness')
        .then(dataObj => {
            saveTopics(dataObj, 'weclick4pdf', 'fitness');
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