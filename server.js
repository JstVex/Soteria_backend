require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

// getting routes
const donationRoutes = require('./routes/donations');
const campaignRoutes = require('./routes/campaigns');
const webscrapeRoutes = require('./routes/webscrapes')
const channelscrapeRoutes = require('./routes/channelscrapes')

// getting web scraping funcs
const { webscrapeWeclick4pdf, webscrapePyithubawa } = require('./functions/webscrapecall')

//  gettng channel scraping func
const channelscrape = require('./functions/channelscrapecall')


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

// calling web scraping funcs
webscrapeWeclick4pdf();
webscrapePyithubawa();

// calling channel scraping func
channelscrape();

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