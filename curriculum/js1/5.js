/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (a, b) => {
  if (a === 0) return;
  b();
  a = a - 1;
  return solution(a, b);
}
module.exports = {
  solution,
};
