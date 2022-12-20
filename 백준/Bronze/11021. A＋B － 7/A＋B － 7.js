const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
const cnt = parseInt(input[0]);
let result = '';
let x = 0;
for(let i=1; i<=cnt; i++){
    let num = (input[i].split(' ')).map(Number);
    x = i;
    result += `Case #${x}: `+ (num[0]+num[1]) + '\n';
}

console.log(result);