const mongoose = require('mongoose');

const Theme = mongoose.model('Theme', {
  identify: {
    type: String
  },
  name: {
    type: String
  }
});

module.exports = { Theme };
