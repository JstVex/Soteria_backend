const express = require('express');
const {
    getWebscrapes,
    getWebscrape,
    getAllFirstPosts,
    createWebscrape,
    deleteWebscrape,
    updateWebscrape,
    getAllWeclick4pdf,
    getAllWeclick4pdfInsurance,
    getAllWeclick4pdfGas,
    getAllWeclick4pdfCarAccidents,
    getAllWeclick4pdfDoctoral,
    getAllWeclick4pdfPersonalFinance,
    getAllWeclick4pdfInvesting,
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

router.get('/weclick4pdf/insurance', getAllWeclick4pdfInsurance);

router.get('/weclick4pdf/gas', getAllWeclick4pdfGas);

router.get('/weclick4pdf/car-accidents', getAllWeclick4pdfCarAccidents);

router.get('/weclick4pdf/doctoral-program', getAllWeclick4pdfDoctoral);

router.get('/weclick4pdf/personal-finance', getAllWeclick4pdfPersonalFinance);

router.get('/weclick4pdf/investing', getAllWeclick4pdfInvesting);

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