'use strict';

/**
 * Controller that renders our index (home) page.
 */
var events = require('../models/events');
function index (request, response) {
  var now = new Date();
  var contextData = {
    'title': "Fragrant Ninja's Dojo of Doom",
    'tagline': "Yes, this is what a dojo smells like",
    'showRSVP': false,
    'events': []
  };
  for(var i=0; i < events.all.length; i++){
    var event = events.all[i];
    if(event.date > now){
      contextData.events.push(event);
    }
  }
    if(Math.random() > 0.5){
    contextData.showRSVP = true;
  }
  response.render('index.html', contextData);
}

module.exports = {
  index: index
};
