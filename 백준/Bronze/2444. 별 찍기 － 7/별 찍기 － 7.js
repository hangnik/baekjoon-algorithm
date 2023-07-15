const input = require("fs").readFileSync("dev/stdin").toString();

for (let i = 1; i < input; i++) {
  let blank = " ".repeat(input - i);
  let stars = "*".repeat(i * 2 - 1);
  console.log(blank + stars);
}

for (let j = input; j > 0; j--) {
  let blank = " ".repeat(input - j);
  let stars = "*".repeat(j * 2 - 1);
  console.log(blank + stars);
}