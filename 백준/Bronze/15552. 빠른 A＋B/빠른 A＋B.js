const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const cnt = parseInt(input[0]);
let result = '';
for(let i=1; i<=cnt; i++){
    let num = (input[i].split(' ')).map(Number);
    result += num[0]+num[1] + '\n';
}

console.log(result);