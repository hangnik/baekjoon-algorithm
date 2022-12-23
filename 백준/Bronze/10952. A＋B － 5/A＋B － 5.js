const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for(let i=0; i<input.length; i++){
    let num = input[i].split(' ').map(Number);
    let result = num[0] + num[1];
    if(result === 0) break;
    console.log(result);
} 