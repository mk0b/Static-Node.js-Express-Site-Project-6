//TODO: Put an intro comment up here like I have in the other projects.
//TODO: Organize my files into well named separate js files and export them/require them in this file.
//TODO: Exceeds - Set up your package.json file so taht running npm start will run the app.
//TODO: Exceeds - Add my own styling - don't change main positioning of app.
//TODO: Test, test, test.
//TODO: Fill out read.me in the new good way.
//TODO: Add a route for /skills or something and take TTH data and display my profile info?
//TODO: Put a sad cartoon panda on my friendly error page? haha


/*TODO: Complete your Pug Files
    - Go through each of the four Pug templates to inject your data.
    The Pug files contain comments that detail each change you will need to make.
    TODO: Delete the helper comments in the pug file when done.
    - Leave the example html so reviewer can reference them.
    TODO: adding a target attribute set to _blank on the a tags for the live links 
    to your projects so that they open in a new window.
 */



//app.js requirements including other files I created to use in app.js
const express = require('express');
const mainRoutes = require('./routes');
const errorHandling = require('./routes/errors');

//Creating a new express app
const app = express();

//Setting and using some items for the app.
app.set('view engine', 'pug');
//serving my static files
app.use('static', express.static('public'));
app.use(mainRoutes);
//app.use(errorHandling);

//Setting up Server
app.listen(3000, () => {
    console.log('Magic is happening on localhost:3000.');
});