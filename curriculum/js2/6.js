/**
 * Given an array, return an array of numbers larger than 5
 * @param {array} a
 * @returns {array}
 */

const solution = (a, array = [], i=0) => {
  if(a.length===0) return [];
  if(i===a.length) return array;
  if(a[i] > 5) array.push(a[i]);
  return solution(a, array, i+1);
};

module.exports = {
  solution,
};
