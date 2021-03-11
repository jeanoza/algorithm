/**
 * Description of the problem
I want to find the kth number when I cut and sort the array array from the ith number to the jth number.

For example, if the array is [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3

Truncate from the 2nd to the 5th of the array is [5, 2, 6, 3].
If you sort the array from 1, it is [2, 3, 5, 6].
The third number in the array from 2 is 5.
Array array, 2D array having [i, j, k] as elements When commands are given as parameters, write a solution function to return the result of applying the above-described operation to all elements of commands in an array. Please.

Restrictions
The length of the array is 1 or more and 100 or less.
Each element of array is 1 or more and 100 or less.
The length of commands is 1 or more and 50 or less.
Each element of commands is 3 in length.

 * @param {*} array number array ex) [1,5,2,6,3,7,4]
 * @param {*} commands array of number array ex)[2,5,3], [4,4,1], [1,7,3]
 *  commands[0] = start number ex) 2ed number  : 5
 *  commands[1] = end number ex) 5th number here : 3
 *  ascending sort this array : [5,2,6,3] => [2,3,5,6]
 *  commands[2] = nth number ex) 3th number in array ascended [2,3,5,6] : 5
 * @returns array of number
 */

function solution(array, commands) {
  //with Spread Operator
  return commands.map((command) => {
    const [startNum, endNum, nthNum] = command;
    const newArray = array
      .filter((value, index) => index >= startNum - 1 && index <= endNum - 1)
      .sort((a, b) => a - b);
    return newArray[nthNum - 1];
  });

  /* Method with for
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    const startNum = commands[i][0] - 1;
    const endNum = commands[i][1];
    const nthNum = commands[i][2] - 1;
    const arraySliced = array.slice(startNum, endNum);
    answer.push(arraySliced.sort((a, b) => a - b)[nthNum]);
  }

  return answer;
  */
}
console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
); //expected [5,6,3]
