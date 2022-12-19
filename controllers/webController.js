const Web = require('../models/Websites');
const mongoose = require('mongoose');

// get all webs
const getWebs = async (req, res) => {
    const webs = await Web.find({});
    res.status(200).json(webs)
}

// get a single web
const getWeb = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such web:(' })
    }

    const web = await Web.findById(id);

    if (!web) {
        return res.status(404).json({ error: 'no such web:(' })
    }

    res.status(200).json(web)
}

// creat new web
const createWeb = async (req, res) => {
    const { title, img, date } = req.body;

    let emptyFields = [];

    if (!title) {
        emptyFields.push('title')
    }
    if (!img) {
        emptyFields.push('img')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'please fill in the fields', emptyFields })
    }

    try {
        const web = await Web.create({ title, img, date })
        res.status(200).json(web)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a web
const deleteWeb = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such web:(' })
    }

    const web = await Web.findOneAndDelete({ _id: id });

    if (!web) {
        return res.status(404).json({ error: 'no such web:(' })
    }

    res.status(200).json(web)
}

// update a task
const updateWeb = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such website' })
    }

    const web = await Web.findOneAndUpdate({ _id: id }, { ...req.body }, {
        new: true
    });

    if (!web) {
        return res.status(404).json({ error: 'no such website' })
    }

    res.status(200).json(web)
}


module.exports = {
    getWebs,
    getWeb,
    createWeb,
    deleteWeb,
    updateWeb
}