const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number);
const arr = Array(30).fill().map((value, index) => index+1);
const newArr = arr.filter(x => !input.includes(x));
let max = newArr[0];

console.log(newArr[0] + '\n' + newArr[1]);