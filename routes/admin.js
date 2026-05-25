const express = require('express');
const Product = require('../models/Product');
const Order = require('../models/Order');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

const router = express.Router();
router.use(authMiddleware, adminMiddleware);

// Products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find().sort({ name: 1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Unable to fetch products', error: error.message });
  }
});

router.post('/products', async (req, res) => {
  try {
    const { name, description, category, price, image, inStock } = req.body;
    if (!name || price == null) {
      return res.status(400).json({ message: 'Name and price are required' });
    }
    const product = await Product.create({ name, description, category, price, image, inStock });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Unable to create product', error: error.message });
  }
});

router.put('/products/:id', async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Product not found' });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Unable to update product', error: error.message });
  }
});

router.delete('/products/:id', async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Unable to delete product', error: error.message });
  }
});

// Orders
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find().populate('items.product').sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Unable to fetch orders', error: error.message });
  }
});

router.get('/orders/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.product');
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Unable to fetch order', error: error.message });
  }
});

router.put('/orders/:id', async (req, res) => {
  try {
    const { status, shippingInfo } = req.body;
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    if (status) order.status = status;
    if (shippingInfo) order.shippingInfo = shippingInfo;
    await order.save();
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Unable to update order', error: error.message });
  }
});

module.exports = router;