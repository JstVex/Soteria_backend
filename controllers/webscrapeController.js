const Webscrape = require("../models/Webscrapes");
const mongoose = require('mongoose');

// get all webscrapes
const getWebscrapes = async (req, res) => {
    const webscrapes = await Webscrape.find({});
    res.status(200).json(webscrapes)
}