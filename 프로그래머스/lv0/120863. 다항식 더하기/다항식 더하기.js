function solution(polynomial) {
  const polyArr = polynomial.split(" ");

  let xArr = polyArr
    .filter((v) => v.includes("x"))
    .map((v) => {
      if (v === "x") v = "1x";
      return parseInt(v);
    })
    .reduce((a, c) => a + c, 0);

  let numArr = polyArr
    .filter((v) => !isNaN(Number(v)))
    .map(Number)
    .reduce((a, c) => a + c, 0);

  if (xArr === 1) {
    xArr = "x";
    return numArr === 0 ? `${xArr}` : `${xArr} + ${numArr}`;
  } else if (xArr === 0) {
    return `${numArr}`;
  } else if (numArr === 0) {
    return `${xArr}x`;
  } else {
    return `${xArr}x + ${numArr}`;
  }
}
