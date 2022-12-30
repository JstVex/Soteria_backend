const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const webscrapeArraySchema = new Schema({
    titlesAmount: {
        type: Number
    },
    titles: {
        type: [String],
        required: true
    },
    imgsAmount: {
        type: Number
    },
    imgs: {
        type: [String],
        required: true
    },
    textsAmount: {
        type: Number
    },
    texts: {
        type: [String]
    },
    datesAmount: {
        type: Number
    },
    dates: {
        type: [String],
        required: true
    },
    urlsAmount: {
        type: Number
    },
    urls: {
        type: [String],
        required: true
    },
    website: {
        type: String,
        required: true,
        enum: ['weclick4pdf', 'pyithubawa']
    },
    firstPost: {
        type: Boolean
    },
    topic: {
        type: String
    }

})

module.exports = mongoose.model('WebscrapeArray', webscrapeArraySchema);