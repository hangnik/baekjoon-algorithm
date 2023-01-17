const input = require("fs").readFileSync("dev/stdin").toString();
let time = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i].charCodeAt() >= 65 && input[i].charCodeAt() < 68) {
    time += 3;
  } else if (input[i].charCodeAt() >= 68 && input[i].charCodeAt() < 71) {
    time += 4;
  } else if (input[i].charCodeAt() >= 71 && input[i].charCodeAt() < 74) {
    time += 5;
  } else if (input[i].charCodeAt() >= 74 && input[i].charCodeAt() < 77) {
    time += 6;
  } else if (input[i].charCodeAt() >= 77 && input[i].charCodeAt() < 80) {
    time += 7;
  } else if (input[i].charCodeAt() >= 80 && input[i].charCodeAt() < 84) {
    time += 8;
  } else if (input[i].charCodeAt() >= 84 && input[i].charCodeAt() < 87) {
    time += 9;
  } else if (input[i].charCodeAt() >= 87 && input[i].charCodeAt() < 91) {
    time += 10;
  }
}
console.log(time);