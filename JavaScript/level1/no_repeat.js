/**
 *
 * @param {*} array
 * @returns array : no repeat elements
 * ex/ solution([1,1,3,3,0,1,1]) => [1,3,0,1]
 */

function solution(arr) {
  // method with function .filter()
  return arr.filter((value, index) => value !== arr[index + 1]);

  /* method "standard" like C or Python
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      answer.push(arr[i]);
      continue;
    }
    if (arr[i] === answer[answer.length - 1]) {
      continue;
    } else {
      answer.push(arr[i]);
    }
  }
  return answer;
  */
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // expected [1,3,0,1]
