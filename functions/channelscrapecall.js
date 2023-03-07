const channelScraping = require("../components/channelscrapes/channel")
const { saveChannel } = require("../controllers/channelscrapeController");

// urls for channels
const weclickUrl = "https://www.youtube.com/@WECLICK2/videos";
const weclick4mmUrl = "https://www.youtube.com/@WECLICK4MM/videos";
const raungniUrl = "https://www.youtube.com/@RaungNi4MM/videos";
const padaytharpinUrl = "https://www.youtube.com/@PaDayTharPin/videos";

// call channels scrapping functions
const channelscrape = () => {
    channelScraping(weclickUrl, 'weclick')
        .then(dataObj => {
            saveChannel(dataObj, 'weclick')
        })
        .catch(console.error)

    channelScraping(weclick4mmUrl, 'weclick4mm')
        .then(dataObj => {
            saveChannel(dataObj, 'weclick4mm')
        })
        .catch(console.error)

    channelScraping(raungniUrl, 'raungni')
        .then(dataObj => {
            saveChannel(dataObj, 'raungni')
        })
        .catch(console.error)

    channelScraping(padaytharpinUrl, 'padaytharpin')
        .then(dataObj => {
            saveChannel(dataObj, 'padaytharpin')
        })
        .catch(console.error)
}

module.exports = channelscrape;
