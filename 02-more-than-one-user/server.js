const express = require('express');
const basicAuth = require('express-basic-auth');

const app = express();

const users = {
  julie: 'pw1',
  bob: 'pw2'
};

const projects = [
  { name: 'Foo, Inc.', owner: 'julie' },
  { name: 'Bar, Inc.', owner: 'julie' },
  { name: 'Baz, Inc.', owner: 'bob' }
];

app.get('/projects',
  basicAuth({
    users,
    challenge: true,
    realm: 'Example Projects',
    unauthorizedResponse: req => (req.auth ? 'Bad credentials' : 'Authentication required')
  }),
  (req, res) => res.json(projects.filter(project => project.owner === req.auth.user)));

const PORT = 5000;
app.listen(PORT, () => console.log(`Resource Server listening on port ${PORT}`));
