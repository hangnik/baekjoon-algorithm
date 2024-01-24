function solution(s) {
    const sortArr = s.split(" ").sort((a, b) => a - b);
    const answer = sortArr[0] + " " +sortArr[sortArr.length - 1]
    return answer;
}