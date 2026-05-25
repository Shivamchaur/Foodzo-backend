const express = require('express');
const Recipe = require('../models/Recipe');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    console.error('Recipes route error:', error.message);
    res.status(500).json({ message: 'Unable to fetch recipes', error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    console.error('Recipe detail error:', error.message);
    res.status(500).json({ message: 'Unable to fetch recipe', error: error.message });
  }
});

module.exports = router;
