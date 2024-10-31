require('dotenv').config();
const port = process.env.PORT;

const express = require("express");
const todoRoutes = require('./routes/tododb.js');
const app = express();

app.use(express.json());

app.use('/todo', todoRoutes);
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
