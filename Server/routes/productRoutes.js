const express = require('express');
const router = express.Router();

// Temporary in-memory data
let products = [
  { id: 1, name: 'Laptop', price: 50000, category: 'Electronics', brand: 'HP', stock: 20, rating: 4.5 },
  { id: 2, name: 'Phone', price: 20000, category: 'Mobiles', brand: 'Samsung', stock: 35, rating: 4.3 },
  { id: 3, name: 'Headphones', price: 3000, category: 'Accessories', brand: 'Boat', stock: 50, rating: 4.2 },
  { id: 4, name: 'Smartwatch', price: 7000, category: 'Wearables', brand: 'Noise', stock: 40, rating: 4.1 },
  { id: 5, name: 'Tablet', price: 25000, category: 'Electronics', brand: 'Apple', stock: 15, rating: 4.6 },
  { id: 6, name: 'Camera', price: 45000, category: 'Electronics', brand: 'Canon', stock: 12, rating: 4.4 },
  { id: 7, name: 'Bluetooth Speaker', price: 4000, category: 'Audio', brand: 'JBL', stock: 30, rating: 4.5 },
  { id: 8, name: 'Gaming Mouse', price: 1500, category: 'Computer Accessories', brand: 'Logitech', stock: 60, rating: 4.7 },
  { id: 9, name: 'Keyboard', price: 1200, category: 'Computer Accessories', brand: 'Dell', stock: 55, rating: 4.2 },
  { id: 10, name: 'Monitor', price: 10000, category: 'Computer Accessories', brand: 'Acer', stock: 25, rating: 4.3 }
];


// GET all products
router.get('/', (req, res) => {
  res.json(products);
});

// GET product by ID
router.get('/:id', (req, res, next) => {
  try {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) throw new Error('Product not found');
    res.json(product);
  } catch (err) {
    next(err);
  }
});

// POST - Add new product
router.post('/', (req, res, next) => {
  try {
    const newProduct = {
      id: products.length + 1,
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      brand: req.body.brand,
      stock: req.body.stock,
      rating: req.body.rating
    };

    products.push(newProduct);

    res.status(201).json({
      message: '✅ Product added successfully!',
      product: newProduct
    });
  } catch (err) {
    next(err);
  }
});



// PUT - Update product
router.put('/:id', (req, res, next) => {
  try {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) throw new Error('Product not found');

    // Update only provided fields
    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    product.category = req.body.category || product.category;
    product.brand = req.body.brand || product.brand;
    product.stock = req.body.stock || product.stock;
    product.rating = req.body.rating || product.rating;

    res.json({message:'Sucessfully product updated'});
  } catch (err) {
    next(err);
  }
});


// DELETE - Delete product
router.delete('/:id', (req, res, next) => {
  try {
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) throw new Error('Product not found');
    products.splice(index, 1);
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
