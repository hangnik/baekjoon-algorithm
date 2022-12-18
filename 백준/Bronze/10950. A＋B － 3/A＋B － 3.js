const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const testNum = parseInt(input[0]);

for(let i=1; i<=testNum; i++){
    let num = input[i].split(' ');
    console.log(parseInt(num[0]) + parseInt(num[1]));
}