let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);
let d = parseInt(input[3]);
let e = parseInt(input[4]);
let f = parseInt(input[5]);

console.log(`${1-a} ${1-b} ${2-c} ${2-d} ${2-e} ${8-f}`);