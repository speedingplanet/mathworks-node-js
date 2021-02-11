const fetch = require('node-fetch');

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

/*
const p = new Promise();

//           ?  -> ?   -> ?                        ...--> !
//           ^
//  A        B  |     C      D      E     F       G      Error
// p.then(s1).then(s2).then(s3).catch(e1).then(s4).then(s5).then(s6).then(s7).catch(e2);

// p.then(undefined, errorHandler) === p.catch(errorHandler);

p.then(() => 10).then((x) => console.log(x));

p.then(function () {
  return 10;
}).then(function (x) {
  console.log(x);
});

p.then(function () {
  // No return statement
}).then(function (x) {
  console.log(x);
});

p.then(function () {
  // throw new Error('oh no!');
  return Promise.reject('oh no!');
  // return 10;
})
  .then(function (x) {
    console.log(x);
  })
  .catch(function (err) {
    console.error(err);
  });

p.then(function () {
  throw new Error('oh no!');
})
  .catch(function (error) {
    console.error(error);
    // return Promise.reject() || throw new Error()
    // return undefined;
    return 10;
  })
  .then(function (x) {
    console.log(x);
  });
*/
