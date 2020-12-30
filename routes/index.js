const express = require('express');
const app = express();

app.use(require('./pokemon'));

module.exports = app;