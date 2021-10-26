'use strict';

// 3rd Party Resources
const express = require('express');

const router = require('./auth/router');

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());
app.use(router);

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

// make sure our tables are created, start up the HTTP server.
// sequelize
//   .sync()
//   .then(() => {
//     app.listen(3000, () => console.log('server up'));
//   })
//   .catch(e => {
//     console.error('Could not start server', e.message);
//   });

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => console.log('Server is up')), port;
  },
};
