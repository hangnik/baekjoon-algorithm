function solution(n) {
    let arr = [];
    for(let i = 0; i < n; i++) {
        if(n % i === 1) {
            arr.push(i);
        }
    }
    const answer = Math.min(...arr);
    return answer;
}