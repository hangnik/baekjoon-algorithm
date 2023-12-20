function solution(board, moves) {
  let basket = [];
  let count = 0;

  for (let i = 0; i < moves.length; i++) {
    let position = moves[i] - 1;

    for (let j = 0; j < board.length; j++) {
      let target = board[j][position];

      if (target === 0) {
        continue;
      } else {
        if (basket[basket.length - 1] === target) {
          basket.pop();
          count += 2;
        } else {
          basket.push(target);
        }
        board[j][position] = 0;
        break;
      }
    }
  }
  return count;
}