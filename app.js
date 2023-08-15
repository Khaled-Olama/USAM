const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// index page

app.use(express.json()); 


require('./routes')(app)

app.listen(4000, () => console.log(`Running on port: 4000`))