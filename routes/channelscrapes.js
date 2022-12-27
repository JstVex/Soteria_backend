const express = require('express');
const {
    getChannelscrapes,
    getChannelscrape,
    createChannelscrape,
    deleteChannelscrape,
    updateChannelscrape,
    getAllWeclick,
    getAllWeclick4mm
} = require('../controllers/channelscrapeController');


const router = express();

// get webs
router.get('/', getChannelscrapes);

router.get('/weclick', getAllWeclick);

router.get('/weclick4mm', getAllWeclick4mm)

//get a single web
router.get('/:id', getChannelscrape);

// creat a web
router.post('/', createChannelscrape);

// delete a web
router.delete('/:id', deleteChannelscrape);

//update a web
router.patch('/:id', updateChannelscrape);

module.exports = router;