const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = input[0];

for (let i = 1; i <= num; i++) {
  let balace = input[i];
  let quarterNum = Math.floor(balace / 25);
  balace = balace % 25;
  let dimeNum = Math.floor(balace / 10);
  balace = balace % 10;
  let nickelNum = Math.floor(balace / 5);
  let pennyNum = balace % 5;
  console.log(quarterNum, dimeNum, nickelNum, pennyNum);
}
