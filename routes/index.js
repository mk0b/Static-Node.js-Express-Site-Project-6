//This file holds the main routes of my app

//Setting reqs for this file
const express = require('express');
const router = express.Router();
//ES6 Way of saying projects = data.project
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
    console.log(projects);
    res.render('index', { projects });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/project', (req, res) => {
    res.render('project', { projects });
});


//This allows us to export and use in app.js | Keep at bottom
module.exports = router;