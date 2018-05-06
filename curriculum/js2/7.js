/**
 *  Takes in an array and a number,
 *    return the number of elements that matches the number
 * @param {array} a
 * @param {number} b
 * @returns {array}
 */

const solution = (a, b, count = 0, i = 0) => {
  if(a.length===0) return [];
  if(i===a.length) return count;
  if(a[i] === b) count += 1;
  return solution(a, b, count, i+1);
};

module.exports = {
  solution,
};
