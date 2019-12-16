/*
Treehouse Project 6 - Static Node.js Express Site - by TAP Student Megan Katherine O'Brien.
*/


//app.js requirements to be able to run app
const express = require('express');
const bodyParser = require('body-parser');
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/project');
const errorHandling = require('./routes/errors');

//Creating a new express app
const app = express();

//Setting and using some items for the app including my other files.
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false}));
//serving my static files
app.use('/static', express.static('public'));
app.use('/images', express.static('img'));
app.use(mainRoutes);
app.use(errorHandling);
app.use('/project', projectRoutes);
app.use(errorHandling);


//Setting up Server
app.listen(3000, () => {
    console.log('Magic is happening on localhost:3000.');
});