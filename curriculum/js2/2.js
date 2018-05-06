/**
 * Given an array, return an array of the same length
 *   where all odd elements are changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a, array = [], i = 0) => {
  if(i===a.length) return array;
  if(a[i] % 2 !== 0) {
    array.push(0);
  } else{
    array.push(a[i]);
  };
  return solution(a, array, i + 1);
};
module.exports = {
  solution,
};
