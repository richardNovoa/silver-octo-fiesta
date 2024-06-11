const express = require('express');
const router = express.Router();

// @route   GET api/Payment
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Payment route'));

module.exports = router;

// day
// name
// default amount
// preferred payment method

// date
// name
// default amount
// custom amount
// status: pending/late
// date_paid:
// preferred payment method