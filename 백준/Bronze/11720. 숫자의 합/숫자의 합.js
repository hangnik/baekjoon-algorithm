const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const num = Number(input[0]);
const arr = input[1].split('').map(Number);
let sum = 0;

for(let i=0; i<num; i++) {
    sum += arr[i];
} 
console.log(sum);