const express = require('express');
const router = express.Router();

// @route   GET api/PaymentMethods
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('PaymentMethods route'));

module.exports = router;
