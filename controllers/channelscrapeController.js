const Channelscrape = require("../models/Channelscrapes");
const mongoose = require('mongoose');

// get all webscrapes
const getChannelscrapes = async (req, res) => {
    const channelscrapes = await Channelscrape.find({});
    res.status(200).json(channelscrapes)
}