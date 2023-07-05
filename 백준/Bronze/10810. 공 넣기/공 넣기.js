const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const [n, m] = input[0].split(" ").map((el) => +el);
let basket = new Array(n).fill(0);

for (let i = 0; i <= m; i++) {
  let [start, end, num] = input[i].split(" ").map((el) => +el);
  for (start; start <= end; start++) {
    basket[start - 1] = num;
  }
}

console.log(basket.join(" "));
