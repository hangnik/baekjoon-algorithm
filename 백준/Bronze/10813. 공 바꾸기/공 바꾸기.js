const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let arr = Array.from(new Array(N), (x, i) => i + 1);

for (let i = 1; i <= M; i++) {
  let [num1, num2] = input[i].split(" ").map(Number);
  [arr[num1 - 1], arr[num2 - 1]] = [arr[num2 - 1], arr[num1 - 1]];
}

console.log(arr.join(" "));
