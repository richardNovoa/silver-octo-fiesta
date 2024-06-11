const mongoose = require('mongoose');

const PaymethodSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  type: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('paymethods', PaymethodSchema);
