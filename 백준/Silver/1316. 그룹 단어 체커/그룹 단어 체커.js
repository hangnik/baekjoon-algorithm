const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);
let cnt = 0;
for (let i = 1; i <= num; i++) {
  const word = input[i];
  const letter = [];
  let isGroupWord = true;
  for (let j = 0; j < word.length; j++) {
    if (letter.indexOf(word[j]) === -1) {
      letter.push(word[j]);
    } else {
      if (letter.indexOf(word[j]) !== letter.length - 1) {
        isGroupWord = false;
        break;
      }
    }
  }
  if (isGroupWord) {
    cnt++;
  }
}
console.log(cnt);