const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = input[0].trim();
for (i = 1; i <= +num; i++) {
  let word = input[i].trim();
  let firstLetter = word[0];
  let lastLetter = word[word.length - 1];
  console.log(`${firstLetter}${lastLetter}`);
}
