const express = require('express');
const router = express.Router();
const pollController = require('../controllers/pollController');

router.get('/', pollController.renderEmployeePoll);

module.exports = router; 