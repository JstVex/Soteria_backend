const Donation = require('../models/Donations');
const mongoose = require('mongoose');

// get all donations
const getDonations = async (req, res) => {
    const donations = await Donation.find({});
    res.status(200).json(donations)
}

// get a single donation
const getDonation = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such donation' })
    }

    const donation = await Donation.findById(id);

    if (!donation) {
        return res.status(404).json({ error: 'no such donation' })
    }

    res.status(200).json(donation)
}

// creat new donation
const createDonation = async (req, res) => {
    const { title, img, date, text, location } = req.body;

    let emptyFields = [];

    if (!title) {
        emptyFields.push('title')
    }
    if (!img) {
        emptyFields.push('img')
    }
    if (!text) {
        emptyFields.push('text')
    }
    if (!location) {
        emptyFields.push('location')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'please fill in the fields', emptyFields })
    }
    try {
        const donation = await Donation.create({ title, img, date, text, location })
        res.status(200).json(donation)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a donation
const deleteDonation = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such donation' })
    }

    const donation = await Donation.findOneAndDelete({ _id: id });

    if (!donation) {
        return res.status(404).json({ error: 'no such donation' })
    }

    res.status(200).json(donation)
}

// update a donation
const updateDonation = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such donation' })
    }

    const donation = await Donation.findOneAndUpdate({ _id: id }, { ...req.body }, {
        new: true
    });

    if (!donation) {
        return res.status(404).json({ error: 'no such donation' })
    }

    res.status(200).json(donation)
}


module.exports = {
    getDonations,
    getDonation,
    createDonation,
    deleteDonation,
    updateDonation
}