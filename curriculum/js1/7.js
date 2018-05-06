/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, i = 2) => {
  if(a === 2) return true;
 
  if(a < 2 || i === a) return false;

  if(a % i === 0) return false;

  if(a % i !== 0) return true;

  return solution(a, i + 1)
};

module.exports = {
  solution,
};
