let p = new Promise((resolve, reject) => {
  return Date.now() % 2 ? resolve(10) : reject('ow');
});

p.then((results) => {
  console.log('results: ', results);
}).catch((error) => console.error(error));
