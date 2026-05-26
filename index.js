require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const recipeRoutes = require('./routes/recipes');
const adminRoutes = require('./routes/admin');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Await database connection on each request in Serverless
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    // If DB fails to connect, return 500 immediately instead of timing out
    res.status(500).json({ 
      error: 'Database Connection Failed', 
      details: error.message 
    });
  }
});

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send({ message: 'Foodzo API is running' });
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
