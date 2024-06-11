const mongoose = require('mongoose');

const PaycycleSchema = new mongoose.Schema({
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
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
