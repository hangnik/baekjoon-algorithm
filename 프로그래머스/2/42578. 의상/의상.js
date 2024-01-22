function solution(clothes) {
    let answer = 1;
    let type = new Map();

    for(let i = 0; i < clothes.length; i++) {
        if(type.has(clothes[i][1])) {
            type.set(clothes[i][1], type.get(clothes[i][1]) + 1);
        } else {
            type.set(clothes[i][1], 1);
        }
    }
    
    for(let v of type.values()) {
        answer *= v + 1;
    }

    return answer - 1;
}