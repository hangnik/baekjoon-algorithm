let arr = [];
for(let i=1; i<=10000; i++) {
    let sum = 0;
    let strNum = String(i);
    for(let j=0; j<strNum.length; j++) {
        sum += +strNum[j];
    }
    let newNum = i + sum;
    arr.push(newNum); 
}

for(let i=1; i<=10000; i++) {
    if(arr.indexOf(i) === -1) {
        console.log(i);
    }
}
