const promptly = require('promptly');
const request = require('request-promise');

async function getCredentials() {
  return {
    username: await promptly.prompt('Username: '),
    password: await promptly.password('Password: ')
  };
}

getCredentials()
  .then(credentials => request.get({
    url: 'http://localhost:5000/projects',
    json: true,
    auth: credentials
  }))
  .then(projects => console.log('Projects:\n', projects))
  .catch(err => console.error('ERROR:', err.message ? err.message : err));
