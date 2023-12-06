function solution(people, limit) {
  let count = 0;
  people = people.sort((a, b) => a - b);

  let minIdx = 0;
  let maxIdx = people.length - 1;

  while (minIdx < maxIdx) {

    if (people[minIdx] + people[maxIdx] > limit) {
      maxIdx -= 1;

    } else {
      minIdx += 1;
      maxIdx -= 1;
    }
    count += 1;
      
     if (maxIdx === minIdx) {
      count += 1;
    }
  }

  return count;
}
