const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const cnt = Number(input[0]);
const num = input[1].split(' ').map(Number);
const findNum = Number(input[2]);
let result = 0;

for(i=0; i<=cnt; i++){
    if(num[i] === findNum){
        result++;
    }
}
console.log(result);