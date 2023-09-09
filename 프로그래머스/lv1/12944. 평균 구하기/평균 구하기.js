function solution(arr) {
    const answer = arr.reduce((a, c) => a + c, 0) / arr.length;
    return answer;
}