function solution(d, budget) {
    const amount = d.sort((a, b) => a - b);
    let count = 0;
    let total = 0;
    
    for(let i = 0; i < amount.length; i++) {
        
        if(total + amount[i] > budget) {
            break;
        } else {
            total += amount[i];
            count += 1;
        }
    }
    return count;
}