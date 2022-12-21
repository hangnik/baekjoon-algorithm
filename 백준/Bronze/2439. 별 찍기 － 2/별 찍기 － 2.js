const input = require('fs').readFileSync('dev/stdin').toString();
let cnt = '';

for(let i=1; i<=input; i++){
    let blank = '';
    cnt += '*';
    for(let j=input-i; j>0; j--){
        blank += ' ';
    }
    console.log(blank + cnt);
}