function solution(order) {
  const answer = [...order.toString()].filter(v => parseInt(v) != 0 && parseInt(v) % 3 === 0);
  return answer.length;
}
