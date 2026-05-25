const bcrypt = require('bcryptjs');
const Product = require('./models/Product');
const Recipe = require('./models/Recipe');
const User = require('./models/User');
const { sampleProducts, sampleRecipes } = require('./data/seeds');

const seedDatabase = async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@foodzo.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    const existingAdmin = await User.findOne({ email: adminEmail });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      await User.create({
        name: 'Admin',
        email: adminEmail,
        password: hashedPassword,
        isAdmin: true,
      });
      console.log(`Created default admin: ${adminEmail}`);
    } else if (!existingAdmin.isAdmin) {
      existingAdmin.isAdmin = true;
      await existingAdmin.save();
      console.log(`Updated existing user to admin: ${adminEmail}`);
    }

    for (const product of sampleProducts) {
      await Product.updateOne({ name: product.name }, { $set: product }, { upsert: true });
    }
    console.log(`Seeded/updated ${sampleProducts.length} products in MongoDB.`);

    for (const recipe of sampleRecipes) {
      await Recipe.updateOne({ title: recipe.title }, { $set: recipe }, { upsert: true });
    }
    console.log(`Seeded/updated ${sampleRecipes.length} recipes in MongoDB.`);
  } catch (error) {
    console.error('Database seed failed:', error.message);
  }
};

module.exports = seedDatabase;