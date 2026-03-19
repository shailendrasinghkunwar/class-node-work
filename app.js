const express = require('express');
const app = express();
const productRoutes = require('./routes/useRouter.js');

app.use(express.json()); // middleware to parse JSON
app.use('/api', productRoutes);

module.exports = app;