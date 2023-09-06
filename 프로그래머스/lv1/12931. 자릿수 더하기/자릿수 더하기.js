function solution(n) {
    const answer = [...n.toString()].map(v => parseInt(v)).reduce((a,c) => a+c, 0);

    return answer;
}