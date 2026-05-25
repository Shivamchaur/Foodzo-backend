const express = require('express');
const Order = require('../models/Order');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  try {
    const { items, shippingInfo, total } = req.body;
    if (!items || !items.length || !shippingInfo || !total) {
      return res.status(400).json({ message: 'Order items, shipping information and total are required' });
    }

    const order = await Order.create({
      user: req.user._id,
      items,
      shippingInfo,
      total,
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Unable to create order', error: error.message });
  }
});

router.get('/user', authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Unable to fetch orders', error: error.message });
  }
});

router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.product');
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    if (order.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Unable to fetch order', error: error.message });
  }
});

module.exports = router;
