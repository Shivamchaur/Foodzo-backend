const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: '' },
  category: { type: String, default: 'General' },
  price: { type: Number, required: true },
  image: { type: String, default: '' },
  inStock: { type: Boolean, default: true },
});

module.exports = mongoose.model('Product', productSchema);
