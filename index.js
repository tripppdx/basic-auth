'use strict';

const { sequelize } = require('./src/server.js');
const app = require('./src/server.js');
const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    app.start(PORT);
  })
  .catch(e => {
    console.error('Could not start server', e.message);
  });
