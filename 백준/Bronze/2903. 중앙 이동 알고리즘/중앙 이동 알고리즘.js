const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const result = (2 ** input + 1) ** 2;
console.log(result);