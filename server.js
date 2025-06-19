 
const express = require('express');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const logger = require('./middleware/loggerMiddleware');

dotenv.config();
const app = express();

// Body parser
app.use(express.json());

// Custom logger middleware
app.use(logger);

// Routes
app.use('/api/products', productRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
