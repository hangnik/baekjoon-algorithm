function solution(dartResult) {
  let num = 0;
  let temp = [];
    
  for(let i = 0; i <= dartResult.length; i++) {
      if(!isNaN(dartResult[i])) {
          num = +dartResult[i - 1] === 1 ? 10 : +dartResult[i];
      }
      
      if(dartResult[i] === "S") {
          temp.push(num);
      } else if(dartResult[i] === "D") {
          temp.push(num ** 2)
      } else if(dartResult[i] === "T") {
          temp.push(num ** 3)
      } else if(dartResult[i] === "*") {
          temp[temp.length - 2] *= 2;
          temp[temp.length - 1] *= 2;
      } else if(dartResult[i] === "#") {
          temp[temp.length - 1] *= -1;
      }
  }
        
  const sum = temp.reduce((a, c) => a + c, 0);
    
  return sum;
}