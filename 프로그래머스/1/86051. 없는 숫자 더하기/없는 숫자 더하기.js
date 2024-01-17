function solution(numbers) {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7 ,8, 9];
    const answer = arr.filter(v => !numbers.includes(v)).reduce((a, c) => a + c, 0);
    return answer;
}