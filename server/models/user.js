const mongoose = require('mongoose');

const User = mongoose.model('User', {
  name: {
    type: String
  },
  sex: {
    type: String
  },
  age: {
    type: Number
  }
});

module.exports = { User };
