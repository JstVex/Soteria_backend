const express = require('express');
const {
    getWebs,
    getWeb,
    createWeb,
    deleteWeb,
    updateWeb
} = require('../controllers/webController');


const router = express();

// get webs
router.get('/', getWebs);

//get a single web
router.get('/:id', getWeb);

// creat a web
router.post('/', createWeb);

// delete a web
router.delete('/:id', deleteWeb);

//update a web
router.patch('/:id', updateWeb);

module.exports = router;