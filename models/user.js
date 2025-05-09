const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/
  },
  age: {
    type: Number,
    min: 0
  }
}, { collection: 'userCollection' }); // Explicitly set the collection name

const User = mongoose.model('User', userSchema);

module.exports = User;
