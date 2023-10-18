const express = require('express')
const router = express.Router();
const patientController = require('../controllers/patientController');

router.get('/',patientController.home)
router.use('/doctor', require('./doctor'));
router.use('/patients', require('./patient'));
router.get('/reports/:status', patientController.reports);

module.exports = router;