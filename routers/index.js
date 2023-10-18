const express = require('express')
const router = express.Router();
const patientController = require('../controllers/patientController');


router.use('/doctor', require('./doctor'));
router.use('/patients', require('./patient'));
router.get('/reports/:status', patientController.reports);

module.exports = router;