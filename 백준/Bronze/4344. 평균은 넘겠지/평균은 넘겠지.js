const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const num = Number(input[0]);

for(let i=1; i<=num; i++){
    let scoreArr = input[i].split(' ').map(Number); 
    let scoreNum = scoreArr[0];
    let sum = 0;
    let cnt = 0;
    let result = 0;

    for(let j=1; j<=scoreNum; j++){
        sum += scoreArr[j];
    } 
    const avg = sum/scoreNum;
    
    for(let k=1; k<=scoreNum; k++){
        if(scoreArr[k] > avg) cnt++;
    }
    result = ((cnt/scoreNum)*100).toFixed(3);
    console.log(`${result}%`);
}