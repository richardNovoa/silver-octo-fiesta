const express = require('express');
const router = express.Router();
const Payment = require('../../models/Payment');

// @route   GET api/Payment
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Payment route'));

// @route   POST api/payment
// @desc    Add a payment
// @access  Public
router.post('/', async (req, res) => {
  const { date, name, amount, status, paid, preferred_payment_method } =
    req.body;

  try {
    let payment = await Payment.findOne({ date: date, name: name });
    if (payment) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'payment already exists' }] });
    }

    payment = new Payment({
      date,
      name,
      amount,
      status,
      paid,
      preferred_payment_method
    });
    await payment.save();
    res.send('payment created');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
