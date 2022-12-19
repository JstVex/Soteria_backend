const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const donationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    date: {
        type: String
    },
    text: {
        type: String,
        required: true
    },
    location: {
        type: String,
        enum: ['kachin', 'kayah', 'kayin', 'chin', 'mon', 'rakhine', 'shan', 'yangon', 'mandalay', 'ayeyarwady', 'bago', 'magway', 'sagaing', 'tanintharyi'],
        required: true
    }
})

module.exports = mongoose.model('Donation', donationSchema);