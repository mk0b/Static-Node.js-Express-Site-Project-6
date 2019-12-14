//TODO: Put an into comment up here like I have in the other projects.
//TODO: Organize my files into well named separate js files and export them/require them in this file.
//TODO: Exceeds - Set up your package.json file so taht running npm start will run the app.
//TODO: Exceeds - Add my own styling - don't change main positioning of app.
//TODO: Test, test, test.
//TODO: Fill out read.me in the new good way.
//TODO: Add a route for /skills or something and take TTH data and display my profile info?
//TODO: Put a sad cartoon panda on my friendly error page? haha

/* TODO: Setup your server, routes and middleware
    - Add variables to require necessary dependancies:
        - Express
        - data.json
        - Optionally - the path module which can be used when setting the absolute path in the express.static function.
    - Set up your middleware
        - set your "view engine" to "pug"
        - use a static route and the express.static method to serve the static files
        located in the public folder
    - Set your routes
        - index route (/) to render the "Home page with the locas set to data.projects"
        - An "about" route (/about) to render the "About page"
        - Dynamic "project" routes (/project) based on the id of the project that render a 
        custom version of the Pug project template to show off each project.
        Which means adding data or "locals", as an object that contains data to be passed
        to the pug Template.
    - Finally start your server. Your app should listen on port 3000, and log a string
    to the console that says which port the app is listening to. "Creating magin on port 3000"
*/

/*TODO: Handle Errors 
    - If a user navigates to a non-existent route, or if a request for a resource fails
    for whatever reason, your app should handle the error in a user friendly way.
    - Add an error handler to app.js that sets the error message to a user friendly message, and sets the status code.
    - Log out a user friendly message, and sets the status code.
    - Log out a user friendly message to the console when the app is pointed at a URL that
    doesn't exist as a route in the app, such as /error/error.
    - Refer to the video on Error handling Middleware, which is linked in the project resources list.
*/

//TODO: Exceeds - Use error handling middleware to render a Pug template
//Create a new Pug template in the views folder and name it error.pug. This Pug file should extend the layout, be set to block content, and display the error.message, error.status, and error.stack properties.
//When the request URL is for a non-existent route, the error.pug template should be displayed in the browser along with the following properties:
//error.message
//error.status
//error.stack

/*TODO: Complete your Pug Files
    - Go through each of the four Pug templates to inject your data.
    The Pug files contain comments that detail each change you will need to make.
    TODO: Delete the helper comments in the pug file when done.
    - Leave the example html so reviewer can reference them.
    TODO: adding a target attribute set to _blank on the a tags for the live links 
    to your projects so that they open in a new window.
 */