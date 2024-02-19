function solution(numbers) {
    let addArr = [];
    
    for(let i = 0; i < numbers.length - 1; i++) {
        for(let j = 0; j < numbers.length; j++) {
            if(i + j + 1 >= numbers.length) continue;
            addArr.push(numbers[i] + numbers[i + j + 1]);    
        }
    }
    
    const answer = addArr.filter((v, i) => addArr.indexOf(v) === i).sort((a, b) => a - b);

    return answer;
}