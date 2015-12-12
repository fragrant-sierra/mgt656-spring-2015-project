'use strict';

/**
 * Controller that renders our index (home) page.
 */
var events = require('../models/events');
function index (request, response) {
  var now = new Date();
  var contextData = {
    'title': "Donut Club",
    'tagline': "We meet and eat donuts. Let's not think too hard about it.",
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
