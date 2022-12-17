const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const num1 = input[0];
const num2 = input[1];
const num3 = input[2];
let prize;
let maxNum;

if(num1 === num2 && num2 === num3){
    prize = 10000+(num1)*1000;
}else if(num1 === num2 || num1 === num3 || num2 === num3){
   if(num1 === num2 || num1 === num3){
    prize = 1000+(num1)*100;
   }else{
    prize = 1000+(num2)*100;
   }
}else {
    maxNum = Math.max(...input);
    prize = maxNum*100;
}

console.log(prize);