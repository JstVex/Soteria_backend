const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const webscrapeSchema = new Schema({
    title: {
        type: String
    },
    img: {
        type: String
    },
    date: {
        type: String
    },
    text: {
        type: String
    }
})

module.exports = mongoose.model('Webscrape', webscrapeSchema);