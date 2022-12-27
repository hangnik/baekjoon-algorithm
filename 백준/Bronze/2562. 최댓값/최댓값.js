const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number);
let max = input[0];

for(let i=0; i<input.length; i++){
    if(max < input[i]) max = input[i];
}

const index = input.indexOf(max) + 1;
console.log(max + '\n' + index);