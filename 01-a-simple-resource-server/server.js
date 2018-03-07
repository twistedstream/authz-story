const express = require('express');

const app = express();

const projects = [
  { name: 'Foo, Inc.' },
  { name: 'Bar, Inc.' }
];

app.get('/projects', (req, res) => res.json(projects));

const PORT = 5000;
app.listen(PORT, () => console.log(`Resource Server listening on port ${PORT}`));
