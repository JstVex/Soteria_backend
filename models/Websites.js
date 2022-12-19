const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const webSchema = new Schema({
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
    }
})

module.exports = mongoose.model('Web', webSchema);