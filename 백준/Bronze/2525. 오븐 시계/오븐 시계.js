const [input1, input2] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const current = input1.split(' ').map(Number);
let hour = current[0];
let minute = current[1];
let time = parseInt(input2);

minute += time;

if(minute >= 60){
    hour += Math.floor(minute/60);
    minute %= 60;
    if(hour >= 24){
        hour -= 24;
    }
}

console.log(`${hour} ${minute}`);