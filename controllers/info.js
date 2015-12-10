'use strict';

/**
 * Controller that renders our about page.
 */
function info (request, response) {
  var contextData = {};
  response.render('info.html', contextData);
}

module.exports = {
  info: info
};