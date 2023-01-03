const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
let max = arr[0];
let avg = 0;
for(let i=0; i<n; i++){
    if(max < arr[i]) max = arr[i];
}
for(let i=0; i<n; i++){
    avg += (arr[i]/max)*100;
}
console.log(avg/n);