function solution(nums) {
  const sortArr = nums.sort((a, b) => a - b);
  let cnt = 0;

  for (let i = 0; i < sortArr.length; i++) {
    if (cnt === nums.length / 2) break;

    if (!sortArr[i - 1]) {
      cnt++;
    } else if (sortArr[i] !== sortArr[i - 1]) {
      cnt++;
    }
  }

  return cnt;
}
