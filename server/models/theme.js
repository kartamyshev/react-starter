const mongoose = require('mongoose');

const Theme = mongoose.model('Theme', {
  value: {
    type: String
  },
  lastModified: Date
});

module.exports = { Theme };
