let [input1, input2] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const num1 = parseInt(input1);
const num2 = input2.split('').map(Number); 

const result1 = num1 * num2[2];
const result2 = num1 * num2[1];
const result3 = num1 * num2[0];

console.log(result1);
console.log(result2);
console.log(result3);
console.log(num1 * parseInt(input2));
