function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    const el = number[i];

    while (k > 0 && stack[stack.length - 1] < el) {
      stack.pop();
      k--;
    }
    stack.push(el);
  }

  stack.splice(stack.length - k, k);
  return stack.join("");
}
