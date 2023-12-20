function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .split("")
    .filter((v) => /^[a-z0-9\-_.]+$/.test(v))
    .join("")
    .replaceAll(/\.{2,}/g, ".")
    .replace(/(^\.*|\.*$)/g, "")
    .replace(/^ *$/, "a")
    .split("")
    .slice(0, 15)
    .join("")
    .replace(/(\.*$)/g, "");
  answer = answer.padEnd(3, answer[answer.length - 1]);
  return answer;
}
