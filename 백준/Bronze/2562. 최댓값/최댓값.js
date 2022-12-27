const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const num = input.map(Number);
let max = num[0];
for(let i=0; i<num.length; i++){
    if(max < num[i]) max = num[i];
}
const index = Number(num.indexOf(max))+1;
console.log(max + '\n' + index);