/**
 * Description of the problem
Complete the solution, a function that returns a new string by sorting the characters appearing in the string s in order from large to small.
s consists only of uppercase and lowercase letters, and uppercase letters are considered to be smaller than lowercase letters.

Restrictions
str is a string of length 1 or more.
 * 
 * @param {*} s:string ex: "Zbcdefg"
 * @returns string ex: "gfedcbZ"
 */

function solution(s) {
  return s
    .split("")
    .sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))
    .join("");
}

console.log(solution("Zbcdefg")); //expected gfedcbZ
