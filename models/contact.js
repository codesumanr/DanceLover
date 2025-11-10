const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, 
  },
  email: {
    type: String,
    required: true,
    trim: true, 
    lowercase: true, 
    match: [/.+@.+\..+/, 'Please enter a valid email address'], // Basic email validation
  },
  message: {
    type: String,
    required: true,
    trim: true, 
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Optional: Adding an index to ensure email uniqueness
contactSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model('Contact', contactSchema);

