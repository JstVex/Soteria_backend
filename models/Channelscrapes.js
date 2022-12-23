const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const channelscrapeSchema = new Schema({
    title: {
        type: String
    },
    img: {
        type: String
    },
    view: {
        type: Number
    },
    time: {
        type: Number
    }
})

module.exports = mongoose.model('Channelscrape', channelscrapeSchema);