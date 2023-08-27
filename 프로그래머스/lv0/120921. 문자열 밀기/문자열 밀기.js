function solution(A, B) {
  let cnt = 0;
  let answer = 0;
  let pushArr = [...A];

  for (let i = 0; i < pushArr.length; i++) {
    let lastStr = pushArr.pop();
    pushArr.splice(0, 0, lastStr).join("");
    cnt++;

    if (A === B) {
      answer = 0;
      break;
    } else if (pushArr.join("") === B) {
      answer = cnt;
      break;
    } else if (pushArr.join("") === A) {
      answer = -1;
    }
  }
  return answer;
}