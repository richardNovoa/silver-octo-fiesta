const express = require('express');
const Paycycle = require('../../models/Paycycle');
const router = express.Router();

// @route   GET api/paycycle
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Paycycle route'));

// @route   POST api/paycycle
// @desc    Add a paycycle
// @access  Public
router.get('/', async (req, res) => {
  const { start_date, amount, source } = req.body;

  try {
    let paycycle = await Paycycle.findOne({ start_date: start_date });
    if (paycycle) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Paycycle already exists' }] });
    }

    paycycle = new Paycycle({ start_date, amount, source });
    await paycycle.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
