/*
Exercice Requirement
- return array<number>
- have to sort array.
- if no element in array whom divisor can divide without remainder, return array : [-1].

input & output
arr	          divisor	return
[5, 9, 7, 10]	5	    [5, 10]
[2, 36, 1, 3]	1	    [1, 2, 3, 36]
[3,2,6]	        10	    [-1]
 */

function solution(arr, divisor) {
  const answer = arr.filter((num) => num % divisor === 0);

  if (answer.length === 0) {
    return [-1];
  } else {
    return answer.sort((a, b) => a - b);
  }
}

console.log(solution([5, 9, 7, 10], 5)); // expected [5,10]
