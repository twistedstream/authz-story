const express = require('express');
const morgan = require('morgan');
const projects = require('./projects.json');

const app = express();

app.use(morgan('dev'));

app.get('/projects',
  (req, res) => res.json(projects));

const PORT = 5000;
app.listen(PORT, () => console.log(`Resource Server listening on port ${PORT}`));
