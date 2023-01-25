require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

// const webRoutes = require('./routes/webs');
const donationRoutes = require('./routes/donations');
const campaignRoutes = require('./routes/campaigns');

const webscrapeRoutes = require('./routes/webscrapes')
const channelscrapeRoutes = require('./routes/channelscrapes')

const { webscrappingFirstPost, webscrappingTopics } = require("./components/webscrapes/websites");
const { saveFirstPost, saveTopics } = require("./controllers/webscrapesController")

const channelScraping = require("./components/channelscrapes/channel")
const { saveChannel } = require("./controllers/channelscrapeController");

const app = express();

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
        credentials: true,
        allowedHeaders: [
            'Content-Type',
        ]
    })
)

// urls for websites
const weclick4pdfUrl = "https://weclick4pdf.com/";
const weclick4pdfActivityUrl = "https://weclick4pdf.com/category/lifestyle/activity/";
const weclick4pdfBeautyUrl = "https://weclick4pdf.com/category/beauty/";
const weclick4pdfTravelUrl = "https://weclick4pdf.com/category/travel-tips/";
const weclick4pdfWorldUrl = "https://weclick4pdf.com/category/world/";
const weclick4pdfGeneralUrl = "https://weclick4pdf.com/category/example-1/";
const weclick4pdfFitnessUrl = "https://weclick4pdf.com/category/sports/";

const pyithubawaUrl = "https://pyithubawa.com/";
const pyithubawaActivityUrl = "https://pyithubawa.com/category/lifestyle/activity/";
const pyithubawaBeautyUrl = "https://pyithubawa.com/category/beauty/";
const pyithubawaWorldUrl = "https://pyithubawa.com/category/world/";
const pyithubawaGeneralUrl = "https://pyithubawa.com/category/example-1/page/2/";
const pyithubawaFitnessUrl = "https://pyithubawa.com/category/sports/page/2/";


// urls for channels
const weclickUrl = "https://www.youtube.com/@WECLICK2/videos";
const weclick4mmUrl = "https://www.youtube.com/@WECLICK4MM/videos";
const raungniUrl = "https://www.youtube.com/@RaungNi4MM/videos";
const padaytharpinUrl = "https://www.youtube.com/@PaDayTharPin/videos";


// call websites scraping functions for weclick4pdf website
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


// call websites scraping functions for pyithubawa website
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

// call channels scrapping functions
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



// middlewares
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded());

//routes 
app.use('/', require('./routes/root'))

app.use('/donations', donationRoutes)

app.use('/channels', channelscrapeRoutes)

app.use('/websites', webscrapeRoutes)

app.use('/campaigns', campaignRoutes)


app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})


const PORT = process.env.PORT || 4004;
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log('listening on port', PORT);
        })
    })
    .catch((error) => {
        console.log(error)
    })