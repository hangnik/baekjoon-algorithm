const input = require('fs').readFileSync('dev/stdin').toString();

let cnt = '';
for(let i=1; i<=input; i++){
    cnt += '*';
    console.log(cnt);
}