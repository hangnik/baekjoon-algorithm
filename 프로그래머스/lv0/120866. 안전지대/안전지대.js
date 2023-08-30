function solution(board) {
  let cnt = 0;

  const changes = Array.from({ length: board.length }, () =>
    Array(board[0].length).fill(0)
  );

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
   
      if (board[i][j] === 1) {
        changes[i][j] = 1;
        if (i - 1 >= 0 && j - 1 >= 0) changes[i - 1][j - 1] = 2; 
        if (i - 1 >= 0) changes[i - 1][j] = 2; 
        if (i - 1 >= 0 && j < board[i].length) changes[i - 1][j + 1] = 2; 
        if (j - 1 >= 0) changes[i][j - 1] = 2; 
        if (j + 1 < board[i].length) changes[i][j + 1] = 2;
        if (i + 1 < board.length && j - 1 >= 0) changes[i + 1][j - 1] = 2; 
        if (i + 1 < board.length) changes[i + 1][j] = 2; 
        if (i + 1 < board.length && j + 1 < board[i].length)
          changes[i + 1][j + 1] = 2; 
      }
    }
  }

 
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (changes[i][j] === 0) {
        cnt++;
      }
    }
  }

  return cnt;
}