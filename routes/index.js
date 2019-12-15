//This file holds the main routes of my app

//Setting reqs for this file
const express = require('express');
const router = express.Router();
const {projects} = require('../data.json');




/* TODO: Setup your routes and middleware
    - Set your routes
        - index route (/) to render the "Home page with the locals set to data.projects"
        - An "about" route (/about) to render the "About page"
        - Dynamic "project" routes (/project) based on the id of the project that render a 
        custom version of the Pug project template to show off each project.
        Which means adding data or "locals", as an object that contains data to be passed
        to the pug Template.
*/

//routes
//TODO: Add locals/variables for pug templates

router.get('/', (req, res) => {
    res.render('index', { projects });
});

router.get('/about', (req, res) => {
    res.render('about');
});

//TODO: Use the project.js file again and make each project/id a route 
//load the same pug tempalte and in the pug template just do an if statment for
//if id = blarg then show blarg data. or if index because it's an arry of projects.


//This allows us to export and use in app.js | Keep at bottom
module.exports = router;