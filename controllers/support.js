'use strict';

/**
 * Controller that renders our about page.
 */
function support (request, response) {
  var contextData = {};
  response.render('support.html', contextData);
}

module.exports = {
  support: support
};