const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

for (let i = 0; i < input / 4; i++) {
  process.stdout.write("long" + " ");
}
process.stdout.write("int");