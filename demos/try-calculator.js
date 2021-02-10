let calculator = require('./calculator');
let add = require('./calculator/add');
let subtract = require('./calculator/subtract').subtract;

console.log(`2 + 2 is `, calculator.add(2, 2));
console.log(`3 + 4 is `, add(3, 4));
