const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

let result = "";
for (let i = 0; i < input / 4; i++) {
  result += "long ";
}
result += "int";

console.log(result);