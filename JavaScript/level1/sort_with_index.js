/**
 * sort with nth index letter.
 * if each word's nth index letter is egal, sort() by alphabet order.
 * @param {*} strings arrayOfString
 * @param {*} n  nth index
 * @returns
 */

function solution(strings, n) {
  const newStrings = strings.sort();
  return newStrings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    return 0;
  });
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));
