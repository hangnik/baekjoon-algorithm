const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const num = Number(input[0]);

for(let i=1; i<=num; i++){
    let score = 0;
    let cnt = 0;

    for(let j=0; j<input[i].length; j++){
        if(input[i][j] === 'O') {
            cnt++;
        }else {
            cnt = 0;
        }
        score += cnt;
    }
    console.log(score);
}