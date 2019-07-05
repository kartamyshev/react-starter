const mongoose = require('mongoose');

const Theme = mongoose.model('Theme', {
  identify: {
    type: String
  },
  value: {
    type: String
  }
});

module.exports = { Theme };
