//TODO: Delete this file?

const express = require('express');
const router = express.Router();
const {projects} = require('../data.json');


//If you go to a project without an id it sends you back to the portfolio page with all projects.
router.get('/', (req, res) => {
    res.redirect('/');
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const projectsArray = Object.values(projects);
    projectsArray.forEach( project => {
        if (project.id === id) {
            const currentProject = { 
                project_name: project.project_name,
                description: project.description,
                technologies: project.technologies,
                live_link: project.live_link,
                github_link: project.github_link,
                img_urls: project.img_urls
             };
             console.log(project.img_urls.main);
            res.render('project', currentProject);
        }
    });
});

//This allows us to export and use in app.js | Keep at bottom
module.exports = router;