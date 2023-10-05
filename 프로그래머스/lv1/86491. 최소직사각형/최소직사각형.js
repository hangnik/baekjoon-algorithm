function solution(sizes) {
  const arr = sizes.flat().sort((a, b) => a - b);
  const width = arr[arr.length - 1];
  const height = arr[arr.length / 2 - 1];

  return width * height;
}
