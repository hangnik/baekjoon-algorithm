const input = require("fs").readFileSync("dev/stdin").toString().toUpperCase();
const result = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  result[input.charCodeAt(i) - 65]++;
}
const maxStr = Math.max(...result);
const maxIndex = result.indexOf(maxStr);
let isSame = false;

for (let j = 0; j < result.length; j++) {
  if (result[j] === maxStr && j !== maxIndex) {
    isSame = true;
    break;
  }
}
console.log(isSame ? "?" : String.fromCharCode(maxIndex + 65));