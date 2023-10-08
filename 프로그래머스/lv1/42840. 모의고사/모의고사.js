function solution(answers) {
  let answer = [];
  let cnt1 = 0,
    cnt2 = 0,
    cnt3 = 0;

  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((value, index) => {
    if (one[index % one.length] === value) cnt1++;
    if (two[index % two.length] === value) cnt2++;
    if (three[index % three.length] === value) cnt3++;
  });

  const maxCnt = Math.max(cnt1, cnt2, cnt3);

  if (cnt1 === maxCnt) answer.push(1);
  if (cnt2 === maxCnt) answer.push(2);
  if (cnt3 === maxCnt) answer.push(3);

  return answer;
}