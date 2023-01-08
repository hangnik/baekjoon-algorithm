const input = require('fs').readFileSync('dev/stdin').toString().trim().split('').map(String);
let result = [];

for(let i=97; i<=122; i++) {
    result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" "))