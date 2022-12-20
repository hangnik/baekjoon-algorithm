const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const cnt = parseInt(input[0]);

for(let i=1; i<=cnt; i++){
    let num = (input[i].split(' ')).map(Number);
    console.log(`Case #${i}: ${num[0]} + ${num[1]} = ${num[0]+num[1]}`);
}
