var express = require('express');
var app     = express();
var port    =   process.env.PORT || 8080;

var data = require('./data');

// ROUTES
// ==============================================

express.application.prefix = express.Router.prefix = function (path, configure) {
    var router = express.Router();
    this.use(path, router);
    configure(router);
    return router;
};

var app = express();


// route grouping
app.prefix('/', function (home) {

    home.route('/').get(data.welcome); //other route
    home.route('/home').get(data.home); // other route
   
});


// route group
app.prefix('/cats', function (cats) {

    cats.route('/').get(data.cat);  // other route
    cats.route('/detail').get(data.detail); //other route
   
});

// route group
app.prefix('/dogs', function (dogs) {

    dogs.route('/').get(data.dog);   // other route
    dogs.route('/detail').get(data.detail);  // other route
   
});


// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);