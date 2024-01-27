// index.js
const express = require('express')
const path = require('path')
const Dimensions = require('./Models/Dimensions')

const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

app.get('/dimensions', (req, res) => {
    let dimensions = new Dimensions(10, 20, 30);
    console.log(dimensions);
    res.send(dimensions.toJson())
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
