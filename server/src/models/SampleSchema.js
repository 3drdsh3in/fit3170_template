const mongoose = require('mongoose');

const sampleSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  s_msg: {
    type: String
  }
});

module.exports = mongoose.model('Sample', sampleSchema);