/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, i =0, answer = '') =>{
if (i === a) return answer;
return solution(a, i + 1, answer + 'hello');
};

module.exports = {
  solution,
};
