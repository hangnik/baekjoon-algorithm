function solution(score) {
  const avg = score.map((v) => {
    return v.reduce((a, c) => a + c) / v.length;
  });

  const sortArr = [...avg].sort((a, b) => b - a);

  const answer = avg.map((v) => sortArr.indexOf(v) + 1);
  return answer;
}