const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
const num = Number(input[0]);

for(let i=1; i<=num; i++) {
    let arr = [];
    let str = input[i].replace(/\r/g, '');
    let r = Number(str[0]);
    for(let j=2; j<str.length; j++) {
        for(let h=1; h<=r; h++) {
            arr.push(str[j]);
        }
    }
    console.log(arr.join(''));
}
