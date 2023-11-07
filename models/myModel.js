const mongoose = require('mongoose');

const phonebookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  // You can add more fields as needed.
});

const Phonebook = mongoose.model('Phonebook', phonebookSchema);

module.exports = Phonebook;