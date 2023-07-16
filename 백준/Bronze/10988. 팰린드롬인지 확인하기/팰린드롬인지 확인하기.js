const input = require("fs").readFileSync("dev/stdin").toString().trim();
const lng = input.length / 2;
const left = input.slice(0, lng);
const right = input.slice(Number.isInteger(lng) ? lng : parseInt(lng) + 1);

if (left === right.split("").reverse().join("")) {
  console.log(1);
} else {
  console.log(0);
}