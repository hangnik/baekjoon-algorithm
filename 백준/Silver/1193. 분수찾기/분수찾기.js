const input = require("fs").readFileSync("dev/stdin").toString();
let X = +input;
let groupCounter = 0;

while (X > 0) {
  groupCounter++;
  X = X - groupCounter;
}

if (groupCounter % 2 == 0) {
  console.log(`${groupCounter + X}/${1 + -X}`);
} else {
  console.log(`${1 + -X}/${groupCounter + X}`);
}