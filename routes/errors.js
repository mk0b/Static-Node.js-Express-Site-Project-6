
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

//TODO: Put a sad cartoon panda on my friendly error page? haha


const express = require('express');
const router = express.Router();

router.all('*', (req, res, next) => {
    const err = new Error('Page not found.');
    err.status = 404;
    next(err);
});

//error handling
router.use((err, req, res, next) => {
    res.locals.error = err;
    res.render('error');
});

//This allows us to export and use in app.js | Keep at bottom
module.exports = router;