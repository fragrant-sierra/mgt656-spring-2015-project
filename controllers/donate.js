'use strict';

/**
 * Controller that renders our about page.
 */
function donate (request, response) {
  var contextData = {};
  response.render('donate.html', contextData);
}

module.exports = {
  donate: donate
};