//This file holds the main routes of my app

//Setting reqs for this file
const express = require('express');
const router = express.Router();
const data = require('../data.json');
//ES6 Way of saying projects = data.project
const {projects} = data;
console.log(projects);
//TODO: Figure out why data is coming through as undefined.

/* TODO: Setup your server, routes and middleware
    - Set your routes
        - index route (/) to render the "Home page with the locals set to data.projects"
        - An "about" route (/about) to render the "About page"
        - Dynamic "project" routes (/project) based on the id of the project that render a 
        custom version of the Pug project template to show off each project.
        Which means adding data or "locals", as an object that contains data to be passed
        to the pug Template.
*/



//This allows us to export and use in app.js | Keep at bottom
module.exports = router;