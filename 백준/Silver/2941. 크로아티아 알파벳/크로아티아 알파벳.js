let input = require("fs").readFileSync("dev/stdin").toString().trim();

const arr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let i of arr) {
  input = input.split(i).join("@");
}
console.log(input.length);