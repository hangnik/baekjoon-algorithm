const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number);
let arr = [];
let newArr = [];
for(let i=0; i<input.length; i++){
   arr.push(input[i]%42);
   newArr = [...new Set(arr)];
}
console.log(newArr.length);