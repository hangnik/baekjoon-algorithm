const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const num = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);
let max = arr[0];
let min = arr[0];

for(let i=0; i<num; i++){
    if(max < arr[i]) max = arr[i];
    if(min > arr[i]) min = arr[i];
}

console.log(`${min} ${max}`);