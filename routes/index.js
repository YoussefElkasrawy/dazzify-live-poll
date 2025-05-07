const express = require('express');
const router = express.Router();
const pollController = require('../controllers/pollController');

router.get('/', pollController.renderPoll);

router.get('/thankyou', (req, res) => {
  res.render('thankyou', { title: 'Thank You' });
});

module.exports = router; 