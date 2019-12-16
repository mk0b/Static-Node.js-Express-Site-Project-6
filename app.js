//TODO: Put an intro comment up here like I have in the other projects.
//TODO: Exceeds - Add my own styling - don't change main positioning of app.
//TODO: Test, test, test.
//TODO: Fill out read.me in the new good way.
//TODO: Add a route for /skills or something and take TTH data and display my profile info?
//TODO: Fix how the 550 by 550 square index project images look.
//TODO: Remove all of the project comments from the pug templates. Double check them all.
//TODO: Add a filter to my originally sized picture then resize it.
//TODO: Make a note in the subission comments that I set npm start to use nodemon and I saved it locally to the project as a dev dep.
//TODO: Clean up comments

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