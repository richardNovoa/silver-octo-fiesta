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
router.post('/', async (req, res) => {
  const { startDate, endDate, amount, source } = req.body;

  try {
    let paycycle = await Paycycle.findOne({ startDate: startDate });
    if (paycycle) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Paycycle already exists' }] });
    }

    paycycle = new Paycycle({ startDate, endDate, amount, source });
    await paycycle.save();
    res.send('paycycle created');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
