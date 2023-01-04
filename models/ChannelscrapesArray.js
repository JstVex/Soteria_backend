const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const channelscrapeArraySchema = new Schema({
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
    viewsAmount: {
        type: Number
    },
    views: {
        type: [String],
        required: true
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
        type: [String]
    },
    pfp: {
        type: String
    },
    subs: {
        type: String
    },
    channel: {
        type: String,
        required: true,
        enum: ['weclick', 'weclick4mm', 'raungni', 'padaytharpin']
    }

})

module.exports = mongoose.model('ChannelscrapeArray', channelscrapeArraySchema);