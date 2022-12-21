const input = require('fs').readFileSync('dev/stdin').toString();
let cnt = '';
let blank = '';
for(let i=1; i<=input; i++){
    cnt += '*';
    for(let j=0; j<input-i; j++){
        blank += ' ';
    }
    console.log(blank + cnt);
    blank = '';
}