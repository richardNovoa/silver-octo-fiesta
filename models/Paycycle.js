const mongoose = require('mongoose');

const PaycycleSchema = new mongoose.Schema({
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  source: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('paycycles', PaycycleSchema);
