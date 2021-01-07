// Require express and create an instance of it
var express = require('express');
var favicon = require('serve-favicon');
var app = express();

// on the request to root (localhost:3000/)
app.get('/', function (req, res) {
    //res.send('<b>My</b> first express http server');
    res.sendFile(__dirname + '/index.html');
});

//For static resources such as css, js and images
app.use(express.static(__dirname + '/public'));

//For favicon of the application
app.use(favicon(__dirname + '/public/images/favicon.png'));

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});
