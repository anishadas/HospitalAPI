const express = require('express')
const router = express.Router();
const patientController = require('../controllers/patientController');
const passport = require('passport');

router.post('/register', passport.authenticate('jwt', { session: false }), patientController.register)
router.post('/:id/create_report', passport.authenticate('jwt', { session: false }), patientController.createReport);
router.get('/:id/all_reports', patientController.allReports);

module.exports = router;