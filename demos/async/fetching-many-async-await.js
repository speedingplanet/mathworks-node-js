const fetch = require('node-fetch');

function parseResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject('Request returned a non-200 response');
  }
}

async function makeManyRequests(txs) {
  let requests = [];
  for (let tx of txs) {
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

  let responses = [];
  for await (let request of requests) {
    responses.push(request);
  }

  return responses;
}

async function main() {
  try {
    let txResponse = await fetch(
      'http://localhost:8000/api/zippay/v1/transactions?_limit=10'
    );
    let txs = [];
    if (txResponse.ok) {
      txs = await txResponse.json();
    }

    let responses = await makeManyRequests(txs);

    console.log('First payor: ', responses[0]);
  } catch (err) {
    console.error(err);
  }

  /* 
  // Don't do this!
  let requests = [];

  for (let tx of txs) {
    let payor = await fetch(
      `http://localhost:8000/api/zippay/v1/users/${tx.payorId}`
    ).then(parseResponse);
    requests.push(payor);

    let payee = await fetch(
      `http://localhost:8000/api/zippay/v1/users/${tx.payeeId}`
    ).then(parseResponse);
    requests.push(payee);
  }
  */
}

main();
