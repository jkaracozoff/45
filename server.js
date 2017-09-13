// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8000;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var path = require('path');
var request = require('request');
var fs = require('fs');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var favicon = require('serve-favicon');
var animate = require('animate');

app.use('/moment', express.static(path.join(__dirname, 'node_modules/moment/src/moment.js')));

var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

// Redirect to HTTPS
app.use(function (req, res, next) {
   // Insecure request?
   if (req.get('x-forwarded-proto') == 'http') {
       // Redirect to https://
       return res.redirect('http://' + req.get('host') + req.url);
   }

   next();
});

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
   secret: '45says', // session secret
   resave: true,
   saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use(express.static('./views'));
//app.use('/moment', express.static(path.join(__dirname, 'node_modules/moment/src/moment.js')));

//app.use(favicon(__dirname + '/cblogo.ico'));

//app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
//app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
//app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
//app.use('/animate', express.static(path.join(__dirname, 'node_modules/animate.css')));
//app.use('/moment', express.static(path.join(__dirname, 'node_modules/moment/src/moment.js')));

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);