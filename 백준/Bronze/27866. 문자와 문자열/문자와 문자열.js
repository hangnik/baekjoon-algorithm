const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const word = input[0].trim();
const num = input[1];

console.log(word[num - 1]);
