const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const logger = require('./configs/logger');

// Set env variables
dotenv.config({ path: path.join(__dirname, '/config.env') });
const app = require('./app');

// DB Connection
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
)
  .replace('<USERNAME>', process.env.DATABASE_USERNAME)
  .replace('<DB_NAME>', process.env.DATABASE_NAME);
mongoose.set('strictQuery', true);
mongoose.connect(DB).then(() => logger.info('DB Connection Successful!!'));

// Server start
const port = process.env.PORT;
const server = app.listen(port, () => {
  logger.info(`App is running on port:${port}...`);
});
