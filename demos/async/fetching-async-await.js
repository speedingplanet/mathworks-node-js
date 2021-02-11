const fetch = require('node-fetch');

async function main() {
  try {
    let response = await fetch('http://localhost:9000/api/zippay/v1/users');
    if (response.ok) {
      let results = await response.json();
      console.log('Results: ', results);
      return results;
    }
  } catch (err) {
    console.error('main: ', err);
    return Promise.reject(err);
  }
}

main().then((results) => {
  console.log('Successful results');
});

/*
fetch('http://localhost:8000/api/zippay/v1/users')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((results) => {
    console.log('Results: ', results);
    return results;
  })
  .catch((error) => {
    console.error(error);
    return Promise.reject(error);
  });
*/
