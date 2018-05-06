/**
 * Given an array, return array of the same length where
 *   all elements <= 5 is changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a, array = [], i = 0) => {
  if(i===a.length) return array;
  if(a[i]<=5) {
    array.push(0);
  } else {
    array.push(a[i]);
  }
  return solution(a, array, i + 1);
};

module.exports = {
  solution,
};
