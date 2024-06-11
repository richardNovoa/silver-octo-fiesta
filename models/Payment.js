const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  amount: {
    default: {
      type: Number,
      required: true
    },
    actual: {
      type: Number
    }
  },
  status: {
    type: String,
    required: true
  },
  paid: {
    type: Date
  },
  preferred_payment_method: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'paymethods'
  }
});

module.exports = mongoose.model('payments', PaymentSchema);
