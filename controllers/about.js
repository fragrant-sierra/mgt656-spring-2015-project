'use strict';

/**
 * Controller that renders our about page.
 */
function about (request, response) {
  var contextData = {
    'title': "Donut Club - About Us",
  };
  response.render('about.html', contextData);
}

module.exports = {
  about: about
};