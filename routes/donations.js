const express = require('express');
const {
    getDonations,
    getDonation,
    createDonation,
    deleteDonation,
    updateDonation,
    getKachin,
    getKayin,
    getKayah,
    getChin,
    getMon,
    getRakhine,
    getShan,
    getYangon,
    getMandalay,
    getAyeyarwady,
    getBago,
    getMagway,
    getSagaing,
    getTanintharyi
} = require('../controllers/donationController');

const router = express();

const { upload } = require('../middleware/multer')

// get webs
router.get('/', getDonations);

router.get('/kachin', getKachin);
router.get('/kayah', getKayah);
router.get('/kayin', getKayin);
router.get('/chin', getChin);
router.get('/mon', getMon);
router.get('/rakhine', getRakhine);
router.get('/shan', getShan);
router.get('/yangon', getYangon);
router.get('/mandalay', getMandalay);
router.get('/ayeyarwady', getAyeyarwady);
router.get('/bago', getBago);
router.get('/magway', getMagway);
router.get('/sagaing', getSagaing);
router.get('/tanintharyi', getTanintharyi);

//get a single web
router.get('/:id', getDonation);

// creat a web
router.post('/', upload.single('img'), createDonation);

// delete a web
router.delete('/:id', deleteDonation);

//update a web
router.patch('/:id', updateDonation);

module.exports = router;