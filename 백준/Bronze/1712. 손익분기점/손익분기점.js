const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const A = input[0];
const B = input[1];
const C = input[2];

let result = Math.floor(A / (C - B)) + 1;
console.log(B >= C ? -1 : result);
