//TODO: Delete this file?

const express = require('express');
const router = express.Router();
const data = require('../data.json');
//ES6 Way of saying projects = data.project
const {projects} = data;

router.get('/', (req, res) => {
    res.render('project');
});

router.get('/:id', (req, res) => {
    
});

//This allows us to export and use in app.js | Keep at bottom
module.exports = router;