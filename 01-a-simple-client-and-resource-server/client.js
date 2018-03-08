const request = require('request-promise');

request.get({
  url: 'http://localhost:5000/projects',
  json: true
})
  .then(projects => console.log('Projects:\n', projects))
  .catch(err => console.error('ERROR:', err.message ? err.message : err));
