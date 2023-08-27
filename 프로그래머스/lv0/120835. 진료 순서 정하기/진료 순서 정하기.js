function solution(emergency) {
  const rank = [...emergency].sort((a, b) => b - a);
  const answer = [];

  for (let i = 0; i < rank.length; i++) {
    for (let j = 0; j < emergency.length; j++) {
      if (rank[i] === emergency[j]) {
        answer[j] = i + 1;
        break;
      }
    }
  }

  return answer;
}