'use strict';

module.exports = function (error, request, response, next) {
  response.status(500).send('Server Error');
};
