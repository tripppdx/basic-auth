'use strict';

const { db } = require('./src/auth/models/user-model.js');
const app = require('./src/server.js');
const PORT = process.env.PORT || 3000;

db.sync()
  .then(() => {
    app.start(PORT);
  })
  .catch(e => {
    console.error('Could not start server', e.message);
  });
