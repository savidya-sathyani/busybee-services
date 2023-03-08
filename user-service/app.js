const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
// CORS
app.use(cors());

// In order to access the data in the request body
app.use(
  express.json({
    limit: '10kb',
  })
);

module.exports = app;
