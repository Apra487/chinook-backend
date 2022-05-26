const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const helmet = require("helmet");
const { customerRouter } = require('./routes/customerRoute');

const cors = require('cors');

const app = express();

//  Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(express.json());
app.use(helmet());

// ROUTES
app.use('/api/v1/', customerRouter);

module.exports = app;
