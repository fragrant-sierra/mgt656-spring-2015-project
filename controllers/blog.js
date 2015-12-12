'use strict';

/**
 * Controller that renders our about page.
 */
function blog (request, response) {
  var contextData = {
    'title': "Donut Club - Blog"
  };
  response.render('blog.html', contextData);
}

module.exports = {
  blog: blog
};