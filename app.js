const express = require('express');
const path = require('path');

const app = express();
const productRoutes = require('./routes/useRouter.js');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'ejs'));

app.use(express.json());

app.get('/', (req, res) => {
  res.render('index', {
    title: 'EJS Demo',
    message: 'Your EJS page is running successfully.'
  });
});

app.use('/api', productRoutes);

module.exports = app;
