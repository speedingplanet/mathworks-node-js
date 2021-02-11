function calculateAverageSync(n) {
  let sum = 0;
  for (let x = 1; x <= n; x++) {
    sum += x;
  }

  let average = sum / x;
  return average;
}

function calculateAverageAsync(n, callback) {
  let sum = 0;
  function work(i, workCallback) {
    sum += i;
    if (i === n) {
      workCallback(sum);
      return;
    }

    setImmediate(work.bind(null, i + 1, cb));
  }

  work(1, (sum) => callback(sum / n));
}
