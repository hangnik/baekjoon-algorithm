const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const num = parseInt(input[0]);
const compareNum = (a, b) => a - b;
const arr = input[1].trim().split(' ').map(Number).sort(compareNum);

console.log(`${arr[0]} ${arr[num-1]}`);