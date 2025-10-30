const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json()); // to parse JSON body
app.use('/product', productRoutes); // product routes

// Error handling middleware
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
