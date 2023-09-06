function solution(n) {
    const answer = [...n.toString()].reduce((a, c) => a + parseInt(c), 0);

    return answer;
}