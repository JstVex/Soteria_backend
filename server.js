require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const webRoutes = require('./routes/webs')
const donationRoutes = require('./routes/donations')
const channelscrapeRoutes = require('./routes/channelscrapes')

const weclick = require("./components/channelscrapes/weclick");
const weclick4mm = require("./components/channelscrapes/weclick4mm");
const raungni = require("./components/channelscrapes/raungni");
const { saveWeClick, saveWeclick4mm, saveRaungni } = require("./controllers/channelscrapeController");

// const webscrappingActivity = require('./components/webscrapes/weclick4pdf');
// const channelscrapping = require('./components/channelscrapes/weclick');

const app = express();

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
        credentials: true
    })
)

// const pageUrl = "https://weclick4pdf.com/"
// const pageUrlActivity = "https://weclick4pdf.com/category/lifestyle/activity/";
const weclickUrl = "https://www.youtube.com/@WECLICK2/videos";
const weclick4mmUrl = "https://www.youtube.com/@WECLICK4MM/videos";
const raungniUrl = "https://www.youtube.com/@RaungNi4MM/videos";

// webscrapping(pageUrl);
// webscrappingActivity(pageUrlActivity);

weclick(weclickUrl)
    .then(dataObj => {
        saveWeClick(dataObj);
    })
    .catch(console.error)

weclick4mm(weclick4mmUrl)
    .then(dataObj => {
        saveWeclick4mm(dataObj);
    })
    .catch(console.error)

raungni(raungniUrl)
    .then(dataObj => {
        saveRaungni(dataObj);
    })
    .catch(console.error)



// middlewares
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded());

//routes 
app.use('/', require('./routes/root'))

app.use('/websites', webRoutes)

app.use('/donations', donationRoutes)

app.use('/channels', channelscrapeRoutes)


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