function solution(brown, yellow) {
    let answer = [];
    let x, y;

    x = -1 + (brown / 4) + Math.sqrt(1 - (brown / 2) + (brown * brown / 16) - yellow);
    y = -1 + (brown / 4) - Math.sqrt(1 - (brown / 2) + (brown * brown / 16) - yellow);
    answer = [x + 2, y + 2];

    return answer;
}