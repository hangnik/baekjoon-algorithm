function solution(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s.split(s[i]).length === 2) {
      arr.push(s[i]);
    }
  }
  return arr.sort().join("");
}