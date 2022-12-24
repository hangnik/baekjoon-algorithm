const input = require('fs').readFileSync('dev/stdin').toString();
let num = Number(input);
let i = 0;
while(true){
    let sum = Math.floor(num/10) + num%10;
    num = (num%10)*10 + sum%10;
    i++;
    
    if(Number(input) === num) break;
}  

console.log(i);