const path = require('path')
const os = require('os');
const {add, subtract,multiply,divide} = require('./math');

/* console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log('---------');
console.log(__dirname);
console.log(__filename);

console.log('-----------');

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));
*/

// const math = require('./math');
// console.log(math.add(23,43));

console.log(add(3,5));
console.log(subtract(3,5));
console.log(multiply(3,5));
console.log(divide(3,5));
