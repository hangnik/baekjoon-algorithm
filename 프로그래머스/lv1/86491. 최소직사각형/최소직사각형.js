function solution(sizes) {
 
  for (let arr of sizes) {
    arr.sort((a, b) => b - a);
  }

  let width = [],
    height = [];

  sizes.forEach((i) => {
    width.push(i[0]);
    height.push(i[1]);
  });

  width.sort((a, b) => b - a);
  height.sort((a, b) => b - a);

  return width[0] * height[0];
}