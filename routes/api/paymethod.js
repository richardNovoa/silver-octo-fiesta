const express = require('express');
const router = express.Router();
const Paymethod = require('../../models/Paymethod');

// @route   GET api/paymethod
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Paymethod route'));

// @route   POST api/paymethod
// @desc    Add a paymethod
// @access  Public
router.post('/', async (req, res) => {
  const { name, type } = req.body;

  try {
    let paymethod = await Paymethod.findOne({ name: name });
    if (paymethod) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'paymethod already exists' }] });
    }

    paymethod = new Paymethod({
      name,
      type
    });
    await paymethod.save();
    res.send('paymethod created');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
