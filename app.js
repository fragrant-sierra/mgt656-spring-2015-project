'use strict';

// Import our express and our configuration
var express = require('express');
var configure = require('./config.js');

// Import our controllers
var indexControllers = require('./controllers/index.js');
var aboutControllers = require('./controllers/about.js');
var eventControllers = require('./controllers/events.js');
var rulesControllers = require('./controllers/rules.js');
var infoControllers = require('./controllers/info.js');
var donateControllers = require('./controllers/donate.js');
var supportControllers = require('./controllers/support.js');


// Create our express app
var app = express();

// Configure it
configure(app);

// Add routes mapping URLs to controllers
app.get('/', indexControllers.index);
app.get('/about', aboutControllers.about);
app.get('/events', eventControllers.listEvents);
app.get('/events/new', eventControllers.newEvent);
app.post('/events/new', eventControllers.saveEvent);
app.get('/api/events', eventControllers.eventJSON);
app.get('/events/:id', eventControllers.eventDetail);
app.post('/events/:id', eventControllers.rsvp);
app.get('/rules', rulesControllers.rules);
app.get('/info', infoControllers.info);
app.get('/donate', donateControllers.donate);
app.get('/support', supportControllers.support);



module.exports = app;