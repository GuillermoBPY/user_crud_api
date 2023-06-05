const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const router = require('./routes');
const errorHandler = require('./utils/errorHandler');
require('dotenv').config();

// Esta es nuestra aplicación
const app = express();

// Middlewares
app.use(express.json());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(cors());

app.use('/api/v1', router);
app.all('/*', (req, res) => {
  return res.send('<h1>You shall not pass!🧙‍♂️🚧</h1>');
});
// middlewares después de las rutas
app.use(errorHandler);

module.exports = app;
