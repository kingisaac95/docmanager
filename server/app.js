const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes/');
const cors = require('cors')

// Set up the express app
const app = express();
const router = express.Router();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Log requests to the console.
app.use(logger('dev'));
app.use(cors());

routes(router);
app.use('/api', router);

module.exports = app;