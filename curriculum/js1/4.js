/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (a, b, result = '') => {
  result += b;

  if(a === 1) {
  return result;
 }

  a = a - 1;

return solution (a, b, result);
};

module.exports = {
  solution,
};
