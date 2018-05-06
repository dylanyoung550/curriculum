/**
 * Given an array, return the sum of all values
 * @param {array} a
 * @returns {number}
 */

const solution = (a, sum = 0, i = 0) => {
  if(a.length===0) return '';
  if(i===a.length) return sum;
  sum += a[i];
  return solution(a, sum, i + 1);
};

module.exports = {
  solution,
};
