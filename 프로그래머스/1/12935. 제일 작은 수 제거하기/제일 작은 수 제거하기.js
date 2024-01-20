function solution(arr) {
  let answer = [...arr];
  const minNum = Math.min(...arr);
  const index = arr.indexOf(minNum);
    
  answer.splice(index, 1);

  if (answer.length === 0) {
    answer.push(-1);
  }

  return answer;
}