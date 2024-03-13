// express users app instance
const express = require('express')

// parse request body to json
const body_parser = require('body-parser')

// for File IO
const path = require('path')

// for users routing
const users_router = require('./routes/users')

// make mock database (raw .json file) available globally in app
global.db = path.join(__dirname, './data/db.json');

const app = express();

// Set the view engine for users routes
app.set('view engine', 'pug');

app.use('/styles.css', express.static('public/styles'))
app.use('/scripts.js', express.static('public/javascripts'))

app.use('/', users_router); // users routes

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
