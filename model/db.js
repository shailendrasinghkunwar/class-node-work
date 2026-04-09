const mongoose = require('mongoose');

async function connectDB() {
  const mongoUri =
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ecommers';

  try {
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    throw error;
  }
}

module.exports = connectDB;
