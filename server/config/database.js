require('dotenv').config();

// Connection URI
const uri = process.env.MONGO_URI || 'mongodb://localhost:27017';

const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri);
    console.log('✅ Connected to MondoDB Database');
  } catch (err) {
    console.error('❌ Connection error:', err.message);
    process.exit(1); // Optional: crash the app if DB connection fails
  }
};

module.exports = connectToDatabase;
