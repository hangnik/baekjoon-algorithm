function solution(n, arr1, arr2) {
  const firstMap = arr1.map((v) => v.toString(2).padStart(n, "0"));
  const secondMap = arr2.map((v) => v.toString(2).padStart(n, "0"));
  let fullMap = [];
  let answer = [];

  for (let i = 0; i < firstMap.length; i++) {
    for (let j = 0; j < secondMap.length; j++) {
      if (firstMap[i][j] === "1" || secondMap[i][j] === "1") {
        fullMap.push("#");
      } else {
        fullMap.push(" ");
      }
    }
  }

  for (let i = 0; i < fullMap.length; i += n) {
    answer.push(fullMap.slice(i, i + n).join(""));
  }

  return answer;
}