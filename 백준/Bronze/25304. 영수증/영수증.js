const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const totalPrice = parseInt(input[0]);
const totalNum = parseInt(input[1]);
let price = 0;

for(let i=2; i<=totalNum+1; i++){
    let num = ((input[i]).split(' ')).map(Number);
    price += num[0]*num[1];
}

if(price === totalPrice){
    console.log('Yes');
}else {
    console.log('No');
}