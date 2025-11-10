const mongoose = require('mongoose');
require('dotenv').config(); 

const connectDB = async () => {
  const mongoURI = process.env.DB_URL; // Get MongoDB URI from environment variables

  if (!mongoURI) {
    console.error('DB_URL is not defined in .env file');
    process.exit(1); // Exit process with failure
  }

  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1); // Exit process with failure
  }
};

// Export the connectDB function
module.exports = connectDB;

