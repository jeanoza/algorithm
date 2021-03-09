/**
 *
 * @param {*} seoul
 * @returns `Kim is in index: x`
 * ex:["Jane", "Kim"] => "Kim is in index : 1"
 */

function solution(seoul) {
  return `Kim is in index : ${seoul.indexOf("Kim")}`;
}

console.log(solution(["Jane", "Meiling", "Choi", "Kim", "Park"]));
