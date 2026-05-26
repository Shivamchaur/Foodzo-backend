const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return true;
  }
  
  const MONGO_URI = process.env.MONGO_URI;
  if (!MONGO_URI) {
    throw new Error("MONGO_URI environment variable is missing");
  }
  
  try {
    const db = await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000, 
    });
    isConnected = db.connections[0].readyState === 1;
    console.log('MongoDB connected');
    return true;
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    // Throw the error so the app can respond with 500 instead of timing out
    throw error; 
  }
};

module.exports = connectDB;
