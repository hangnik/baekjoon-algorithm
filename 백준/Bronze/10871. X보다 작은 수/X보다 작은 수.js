const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const num = input[0].split(' ').map(Number);
const list = input[1].split(' ').map(Number);
let lessNum = [];
for(let i=0; i<=num[0]; i++){
    if(list[i] < num[1]){
        lessNum.push(list[i]);
    }
}
console.log(lessNum.join(" "));