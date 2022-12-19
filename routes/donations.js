const express = require('express');
const {
    getDonations,
    getDonation,
    createDonation,
    deleteDonation,
    updateDonation
} = require('../controllers/donationController');


const router = express();

// get webs
router.get('/', getDonations);

//get a single web
router.get('/:id', getDonation);

// creat a web
router.post('/', createDonation);

// delete a web
router.delete('/:id', deleteDonation);

//update a web
router.patch('/:id', updateDonation);

module.exports = router;