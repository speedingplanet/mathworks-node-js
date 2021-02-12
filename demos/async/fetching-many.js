const fetch = require('node-fetch');

function parseResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject('Request returned a non-200 response');
  }
}

fetch('http://localhost:8000/api/zippay/v1/transactions?_limit=10')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((results) => {
    console.log('First transaction payorId is ', results[0].payorId);
    let requests = [];
    for (let tx of results) {
      requests.push(
        fetch(`http://localhost:8000/api/zippay/v1/users/${tx.payorId}`).then(
          parseResponse
        )
      );
      requests.push(
        fetch(`http://localhost:8000/api/zippay/v1/users/${tx.payeeId}`).then(
          parseResponse
        )
      );
    }

    let allPromises = Promise.all(requests);
    return allPromises;
  })
  .then(
    (metaPromise) => {
      // All promises resolved successfully
      // metaPromise is an array with each sub-Promise's results
      console.log('First payor data: ', metaPromise[0]);
    },
    (rejected) => {
      // Any one of the promises rejected / failed
      // Error of the first rejections, all other promise results discarded
    }
  );
