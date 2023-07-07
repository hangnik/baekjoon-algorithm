const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let basket = Array.from(new Array(N), (v, i) => i + 1);

for (let i = 1; i <= M; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  let arr = [];
  for (j = a - 1; j < b; j++) {
    arr.push(basket[j]);
  }
  arr.reverse();
  basket.splice(a - 1, b - a + 1, ...arr);
}
console.log(...basket);