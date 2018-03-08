const express = require('express');
const morgan = require('morgan');
const basicAuth = require('express-basic-auth');
const projects = require('./projects.json');
const users = require('./users.json');

const app = express();

app.use(morgan('dev'));

app.get('/projects',
  basicAuth({
    users,
    unauthorizedResponse: req => (req.auth ? 'Bad credentials' : 'Authentication required')
  }),
  (req, res) => res.json(projects.filter(project => project.owner === req.auth.user)));

const PORT = 5000;
app.listen(PORT, () => console.log(`Resource Server listening on port ${PORT}`));
