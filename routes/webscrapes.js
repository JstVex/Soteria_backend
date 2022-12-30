const express = require('express');
const {
    getWebscrapes,
    getWebscrape,
    getAllFirstPosts,
    createWebscrape,
    deleteWebscrape,
    updateWebscrape,
    getAllWeclick4pdf,
    getAllWeclick4pdfActivity,
    getAllWeclick4pdfBeauty,
    getAllWeclick4pdfTravel,
    getAllWeclick4pdfWorld,
    getAllWeclick4pdfGeneral,
    getAllWeclick4pdfFitness,
    getAllPyithubawa,
    getAllPyithubawaActivity,
    getAllPyithubawaBeauty,
    getAllPyithubawaWorld,
    getAllPyithubawaGeneral,
    getAllPyithubawaFitness
} = require('../controllers/webscrapesController');

const router = express();

// get websites
router.get('/', getWebscrapes);

router.get('/firstposts', getAllFirstPosts);

// get weclick4pdf 
router.get('/weclick4pdf', getAllWeclick4pdf);

router.get('/weclick4pdf/activity', getAllWeclick4pdfActivity);

router.get('/weclick4pdf/beauty', getAllWeclick4pdfBeauty);

router.get('/weclick4pdf/travel', getAllWeclick4pdfTravel);

router.get('/weclick4pdf/world', getAllWeclick4pdfWorld);

router.get('/weclick4pdf/general', getAllWeclick4pdfGeneral);

router.get('/weclick4pdf/fitness', getAllWeclick4pdfFitness);

// get pyithubawa
router.get('/pyithubawa', getAllPyithubawa);

router.get('/pyithubawa/activity', getAllPyithubawaActivity);

router.get('/pyithubawa/beauty', getAllPyithubawaBeauty);

router.get('/pyithubawa/world', getAllPyithubawaWorld);

router.get('/pyithubawa/general', getAllPyithubawaGeneral);

router.get('/pyithubawa/fitness', getAllPyithubawaFitness);

//get a single web
router.get('/:id', getWebscrape);

// creat a web
router.post('/', createWebscrape);

// delete a web
router.delete('/:id', deleteWebscrape);

//update a web
router.patch('/:id', updateWebscrape);

module.exports = router;