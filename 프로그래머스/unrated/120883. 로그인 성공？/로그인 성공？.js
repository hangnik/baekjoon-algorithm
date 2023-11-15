function solution(id_pw, db) {
    const id = id_pw[0];
    const pw = id_pw[1];
    
    for(let i = 0; i < db.length; i++) {
        if(id === db[i][0]) {
            
            for(let j = 0; j < db[i].length; j++) {
                if(pw === db[i][1]) {
                    return "login"
                } else {
                    return "wrong pw"
                }
            }
            
        } 
    }
    return "fail"
}
