const sampleProducts = [
  {
    name: "Organic Banana",
    description: "Fresh organic bananas, sweet and juicy.",
    category: "Fruits",
    price: 80,
    image: "https://images.unsplash.com/photo-1574226516831-e1dff420e38e?auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    name: "Paneer Cubes",
    description: "High-protein cottage cheese cubes for curries.",
    category: "Dairy",
    price: 240,
    image: "https://images.unsplash.com/photo-1604908177522-c7c7a7bca7d6?auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    name: "Brown Basmati Rice",
    description: "Aromatic brown basmati rice rich in fiber.",
    category: "Grains",
    price: 210,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c22?auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    name: "Whole Wheat Bread",
    description: "Fresh whole wheat bread loaf for healthy sandwiches.",
    category: "Bakery",
    price: 55,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    name: "Greek Yogurt",
    description: "Creamy Greek yogurt rich in protein.",
    category: "Dairy",
    price: 110,
    image: "https://images.unsplash.com/photo-1589923188900-287dedf0421c?auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    name: "Chicken Breast",
    description: "Boneless chicken breast fillets for healthy meals.",
    category: "Meat",
    price: 320,
    image: "https://images.unsplash.com/photo-1604908177522-c7c7a7bca7d6?auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    name: "Extra Virgin Olive Oil",
    description: "Cold-pressed olive oil for cooking and salads.",
    category: "Oils",
    price: 580,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    name: "Almonds",
    description: "Crunchy roasted almonds, perfect for snacks.",
    category: "Nuts",
    price: 520,
    image: "https://images.unsplash.com/photo-1600185367981-bf47f1c6b5d8?auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    name: "Tomato Ketchup",
    description: "Tangy tomato ketchup made with natural spices.",
    category: "Condiments",
    price: 95,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    name: "Mixed Fruit Jam",
    description: "Sweet mixed fruit jam for bread and toast.",
    category: "Spreads",
    price: 130,
    image: "https://images.unsplash.com/photo-1511689984582-0bfa5b07b1db?auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    name: "Paneer Butter Masala Pack",
    description: "Ready-to-cook paneer butter masala mix.",
    category: "Ready-to-Eat",
    price: 180,
    image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    name: "Mango Pulp",
    description: "Sweet mango pulp for drinks and desserts.",
    category: "Fruits",
    price: 150,
    image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    name: "Masala Oats",
    description: "Spiced oats for a quick breakfast.",
    category: "Breakfast",
    price: 75,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    name: "Green Tea Bags",
    description: "Antioxidant-rich green tea bags.",
    category: "Beverages",
    price: 180,
    image: "https://images.unsplash.com/photo-1510626176961-4b97b47e4e8e?auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    name: "Sweet Corn Kernels",
    description: "Fresh sweet corn kernels for salads and soups.",
    category: "Vegetables",
    price: 95,
    image: "https://images.unsplash.com/photo-1511632765486-8b95e5c5f212?auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    name: "Salmon Fillet",
    description: "Fresh salmon fillet rich in omega-3.",
    category: "Seafood",
    price: 620,
    image: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    name: "Brown Sugar",
    description: "Natural brown sugar for baking and desserts.",
    category: "Baking",
    price: 85,
    image: "https://images.unsplash.com/photo-1512058564366-c9e8f8dda0a1?auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    name: "Butter Croissants",
    description: "Hot and flaky butter croissants.",
    category: "Bakery",
    price: 150,
    image: "https://images.unsplash.com/photo-1512058564366-c9e8f8dda0a1?auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    name: "Dark Chocolate",
    description: "Rich dark chocolate bars with 70% cocoa.",
    category: "Snacks",
    price: 220,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    name: "Cashew Nuts",
    description: "Premium cashew nuts, lightly salted.",
    category: "Nuts",
    price: 560,
    image: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=800&q=80",
    inStock: true
  }
];

const sampleRecipes = [
  {
    title: "Banana Oat Smoothie",
    description: "Healthy banana smoothie with oats and honey.",
    ingredients: [
      "2 ripe bananas",
      "1 cup milk",
      "1/2 cup rolled oats",
      "1 tbsp honey",
      "1/2 tsp cinnamon"
    ],
    steps: [
      "Add all ingredients to a blender.",
      "Blend until smooth.",
      "Pour into glasses and serve chilled."
    ],
    image: "https://images.unsplash.com/photo-1532635244-9d593c7db2f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Paneer Butter Masala",
    description: "Creamy paneer curry with rich tomato gravy.",
    ingredients: [
      "250g paneer cubes",
      "2 tomatoes",
      "1 onion",
      "2 tbsp butter",
      "1 tsp ginger garlic paste",
      "1 tsp garam masala",
      "1/2 cup cream"
    ],
    steps: [
      "Blend tomatoes and onions to a smooth puree.",
      "Heat butter, add ginger garlic paste and sauté.",
      "Add puree and spices, cook until oil separates.",
      "Add paneer cubes and cream, simmer 5 minutes."
    ],
    image: "https://images.unsplash.com/photo-1604908177522-c7c7a7bca7d6?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Vegetable Fried Rice",
    description: "Spicy fried rice loaded with vegetables.",
    ingredients: [
      "2 cups cooked rice",
      "1 cup mixed vegetables",
      "2 tbsp oil",
      "1 tbsp soy sauce",
      "1 tsp chopped ginger",
      "1 tsp chopped garlic"
    ],
    steps: [
      "Heat oil and sauté ginger, garlic and vegetables.",
      "Add rice, soy sauce and salt.",
      "Stir fry until rice is evenly coated."
    ],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Grilled Chicken Salad",
    description: "Fresh salad with grilled chicken and greens.",
    ingredients: [
      "200g chicken breast",
      "4 cups mixed greens",
      "1 tomato sliced",
      "1/2 cucumber sliced",
      "2 tbsp olive oil",
      "1 tbsp lemon juice"
    ],
    steps: [
      "Grill seasoned chicken until cooked.",
      "Mix greens, tomato and cucumber.",
      "Slice chicken and toss with dressing."
    ],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Creamy Tomato Pasta",
    description: "Pasta in rich tomato cream sauce.",
    ingredients: [
      "250g pasta",
      "2 tomatoes",
      "1/2 cup cream",
      "1 tbsp olive oil",
      "1 tsp oregano",
      "1/2 onion chopped"
    ],
    steps: [
      "Boil pasta until al dente.",
      "Cook onion and tomatoes, add cream and herbs.",
      "Toss pasta in sauce and serve hot."
    ],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Mango Lassi",
    description: "Refreshing mango yogurt drink with cardamom.",
    ingredients: [
      "1 cup mango pulp",
      "1 cup yogurt",
      "1/2 cup milk",
      "1 tbsp sugar",
      "1/4 tsp cardamom"
    ],
    steps: [
      "Blend all ingredients until smooth.",
      "Pour into glasses and garnish with saffron."
    ],
    image: "https://images.unsplash.com/photo-1505253219576-4532f3b6d4b5?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Aloo Paratha",
    description: "Stuffed potato paratha with spices.",
    ingredients: [
      "2 cups whole wheat flour",
      "3 boiled potatoes",
      "1 tsp cumin powder",
      "1 tsp chili powder",
      "2 tbsp oil",
      "salt to taste"
    ],
    steps: [
      "Mash potatoes with spices.",
      "Stuff dough and roll out parathas.",
      "Cook on tawa until golden."
    ],
    image: "https://images.unsplash.com/photo-1512058564366-c9e8f8dda0a1?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Chocolate Energy Bites",
    description: "No-bake chocolate almond energy balls.",
    ingredients: [
      "1 cup almonds",
      "1/2 cup dates",
      "2 tbsp cocoa powder",
      "1 tbsp honey",
      "1/4 tsp salt"
    ],
    steps: [
      "Blend all ingredients into a paste.",
      "Roll into small balls.",
      "Chill before serving."
    ],
    image: "https://images.unsplash.com/photo-1527515637463-4165d2a610b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Masala Oats Upma",
    description: "Spiced oats upma with vegetables.",
    ingredients: [
      "1 cup oats",
      "1/2 cup mixed vegetables",
      "1 tsp mustard seeds",
      "1 tsp curry leaves",
      "1 tsp oil"
    ],
    steps: [
      "Roast oats lightly and set aside.",
      "Sauté vegetables with spices.",
      "Add oats and water, cook until soft."
    ],
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Garlic Butter Shrimp",
    description: "Juicy shrimp cooked in garlic butter.",
    ingredients: [
      "300g shrimp",
      "3 cloves garlic",
      "2 tbsp butter",
      "1 tbsp lemon juice",
      "salt and pepper"
    ],
    steps: [
      "Sauté garlic in butter.",
      "Add shrimp and cook until pink.",
      "Finish with lemon juice."
    ],
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Tomato Basil Soup",
    description: "Warm tomato soup with fresh basil.",
    ingredients: [
      "5 tomatoes",
      "1 onion",
      "2 cloves garlic",
      "1 cup vegetable broth",
      "1/4 cup basil"
    ],
    steps: [
      "Cook tomatoes, onion and garlic until soft.",
      "Blend with broth and basil.",
      "Simmer and serve hot."
    ],
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Honey Lemon Tea",
    description: "Refreshing hot tea with honey and lemon.",
    ingredients: [
      "2 cups water",
      "1 black tea bag",
      "1 tbsp honey",
      "1 tsp lemon juice"
    ],
    steps: [
      "Boil water and steep tea bag.",
      "Add honey and lemon.",
      "Serve warm."
    ],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Mango Cheesecake",
    description: "Creamy no-bake mango cheesecake.",
    ingredients: [
      "1 cup digestive biscuits",
      "1/2 cup butter",
      "1 cup cream cheese",
      "1/2 cup mango pulp",
      "2 tbsp sugar"
    ],
    steps: [
      "Make biscuit crust and press into pan.",
      "Mix cream cheese with mango pulp and sugar.",
      "Pour over crust and chill."
    ],
    image: "https://images.unsplash.com/photo-1512058564366-c9e8f8dda0a1?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Spicy Corn Salad",
    description: "Tangy salad with sweet corn and peppers.",
    ingredients: [
      "1 cup sweet corn kernels",
      "1/2 cup bell pepper",
      "1 tbsp olive oil",
      "1 tsp lemon juice",
      "salt and pepper"
    ],
    steps: [
      "Sauté corn lightly.",
      "Mix with vegetables and dressing.",
      "Serve immediately."
    ],
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Butter Croissant French Toast",
    description: "Rich French toast made with croissants.",
    ingredients: [
      "2 croissants",
      "2 eggs",
      "1/2 cup milk",
      "1 tsp sugar",
      "1 tbsp butter"
    ],
    steps: [
      "Whisk eggs, milk and sugar.",
      "Dip croissants and cook on buttered pan.",
      "Serve warm."
    ],
    image: "https://images.unsplash.com/photo-1512058564366-c9e8f8dda0a1?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Honey Roasted Almonds",
    description: "Sweet and crunchy honey roasted almonds.",
    ingredients: [
      "2 cups almonds",
      "2 tbsp honey",
      "1 tbsp butter",
      "1/4 tsp cinnamon",
      "pinch salt"
    ],
    steps: [
      "Melt honey and butter.",
      "Toss almonds and roast lightly.",
      "Cool before serving."
    ],
    image: "https://images.unsplash.com/photo-1505253219576-4532f3b6d4b5?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Oven Baked Salmon",
    description: "Simple oven-baked salmon with herbs.",
    ingredients: [
      "2 salmon fillets",
      "1 tbsp olive oil",
      "2 cloves garlic",
      "1 tsp dried herbs",
      "salt and pepper"
    ],
    steps: [
      "Preheat oven to 200°C.",
      "Season salmon and bake for 18-20 minutes.",
      "Serve with lemon."
    ],
    image: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Dark Chocolate Bark",
    description: "Easy dark chocolate bark with nuts.",
    ingredients: [
      "200g dark chocolate",
      "1/4 cup almonds",
      "1/4 cup cashews",
      "2 tbsp dried cranberries"
    ],
    steps: [
      "Melt chocolate and spread on tray.",
      "Sprinkle nuts and berries.",
      "Chill until firm."
    ],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Sweet Tomato Chutney",
    description: "Tangy sweet tomato chutney with spices.",
    ingredients: [
      "4 tomatoes",
      "1/2 cup sugar",
      "1 tsp mustard seeds",
      "1 tsp ginger paste",
      "1 tbsp oil"
    ],
    steps: [
      "Cook tomatoes and sugar until soft.",
      "Temper spices and add.",
      "Simmer until thick."
    ],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Ginger Lemon Tea",
    description: "Soothing hot ginger lemon tea.",
    ingredients: [
      "2 cups water",
      "1 inch ginger sliced",
      "1 tsp honey",
      "1 tbsp lemon juice"
    ],
    steps: [
      "Boil water with ginger.",
      "Add honey and lemon.",
      "Strain and serve warm."
    ],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
  }
];

module.exports = { sampleProducts, sampleRecipes };