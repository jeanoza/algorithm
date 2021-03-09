/** center_letter
 * @param {*} string
 * @returns string.isPair? => (two letter of this string's center) : (center letter)
 */

function solution(s) {
  //   let answer = "";
  //   if (s.length % 2 === 1) {
  //     answer = s[Math.floor(s.length / 2)];
  //   } else {
  //     answer = s[s.length / 2 - 1] + s[s.length / 2];
  //   }

  return s.length % 2 === 1
    ? s[Math.floor(s.length / 2)]
    : s[s.length / 2 - 1] + s[s.length / 2];
}

console.log(solution("abcde")); //expected "c"
console.log(solution("qwer")); //expected "we"
