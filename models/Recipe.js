const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  ingredients: [String],
  steps: [String],
  image: { type: String, default: '' },
});

module.exports = mongoose.model('Recipe', recipeSchema);
