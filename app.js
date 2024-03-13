// express users app instance
const express = require('express')

// parse request body to json
const body_parser = require('body-parser')

// for File IO
const path = require('path')

// make database (raw .json file) available globally in app
global.db = path.join(__dirname, './data/db.json');

// for users routing
const users_router = require('./routes/users')
const api_route = require('./routes/api');

const app = express();

// Set the view engine for users routes
app.set('view engine', 'pug');

app.use('/styles.css', express.static('public/styles'))
app.use('/scripts.js', express.static('public/javascripts'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', api_route); // API routes
app.use('/', users_router); // users routes

// redirect to home page if unknown requests requested
app.use((req, res) => {
    res.redirect('/');
});


const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
