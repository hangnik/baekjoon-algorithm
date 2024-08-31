function solution(s){
    let p = 0;
    let y = 0;

    const word = s.toLowerCase().split('');
    
    for(let i = 0; i < word.length; i++) {
        if(word[i] === 'p') p++;
        if(word[i] === 'y') y++;
    }
    
    
    return p === y ? true : false;
}