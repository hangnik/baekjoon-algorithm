function solution(n, lost, reserve) {
  let answer = 0;
  lost = lost.sort((a, b) => a - b);
  reserve = reserve.sort((a, b) => a - b);

  for (let i = 1; i <= n; i++) {
    if (lost.indexOf(i) < 0) {
      answer++;
    } else {
      if (reserve.indexOf(i - 1) >= 0 && lost.indexOf(i - 1) < 0) {
        answer++;
        reserve = reserve.filter((v) => v !== i - 1);
      } else if (reserve.indexOf(i + 1) >= 0 && lost.indexOf(i + 1) < 0) {
        answer++;
        reserve = reserve.filter((v) => v !== i + 1);
      } else if (reserve.indexOf(i) >= 0) {
        answer++;
        reserve = reserve.filter((v) => v !== i);
      } else {
        continue;
      }
    }
  }

  return answer;
}