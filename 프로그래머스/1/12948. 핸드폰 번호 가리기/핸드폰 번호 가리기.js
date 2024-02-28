function solution(phone_number) {
    const endNum = phone_number.substr(-4, 4);
    const answer = "*".repeat(phone_number.length - 4).concat(endNum);
    return answer;
}