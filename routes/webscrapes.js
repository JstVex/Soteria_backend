const express = require('express');
const {
    getWebscrapes,
    getWebscrape,
    createWebscrape,
    deleteWebscrape,
    updateWebscrape,
    getAllWeclick4pdf,
    getAllWeclick4pdfActivity
} = require('../controllers/webscrapesController');

const router = express();

// get webs
router.get('/', getWebscrapes);

router.get('/weclick4pdf', getAllWeclick4pdf);

router.get('/weclick4pdf/activity', getAllWeclick4pdfActivity);

//get a single web
router.get('/:id', getWebscrape);

// creat a web
router.post('/', createWebscrape);

// delete a web
router.delete('/:id', deleteWebscrape);

//update a web
router.patch('/:id', updateWebscrape);

module.exports = router;