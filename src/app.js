const express = require('express');
const bodyParser = require('body-parser');
const skillsRoute = require('./controller/skills.controller');
const app = express();

app.use(bodyParser.json());

app.use('/skills', skillsRoute);

app.use((error, _req, res, _next) => {
  res.status(500).send(error.message);
});

module.exports = app;
