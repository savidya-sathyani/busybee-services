const express = require('express');

const app = express();

// Middleware
// In order to access the data in the request body
app.use(
  express.json({
    limit: '10kb',
  })
);

module.exports = app;
