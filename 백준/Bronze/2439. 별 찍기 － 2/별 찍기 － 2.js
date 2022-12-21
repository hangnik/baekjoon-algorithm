const input = require('fs').readFileSync('dev/stdin').toString();
let num = parseInt(input);
let cnt = '';

for(let i=1; i<=num; i++){
    cnt += "*";
    let blank = ' '.repeat(num - i);
    console.log(`${blank}${cnt}`);
}