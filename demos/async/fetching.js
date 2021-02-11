const fetch = require('node-fetch');

fetch('http://localhost:8000/api/zippay/v1/users')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((results) => {
    console.log('Results: ', results);
  })
  .catch((error) => console.error(error));
