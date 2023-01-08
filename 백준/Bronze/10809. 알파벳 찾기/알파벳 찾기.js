const input = require('fs').readFileSync('dev/stdin').toString().trim().split('').map(String);
let str = [];
let result = [];
for(let h=97; h<=122; h++) {
    str.push(String.fromCharCode(h));
}

for(let i=0; i<str.length; i++) {
    let num = -1;
    for(let j=0; j<input.length; j++) {
        if(str[i] === input[j]) {
            num = input.indexOf(input[j]);
        }
    }
    result.push(num);
}
console.log(result.join(" "))