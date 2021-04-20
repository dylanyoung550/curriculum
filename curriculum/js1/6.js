/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a, div = 2, sum = 0) => {
  if(div ===  a) {
    return sum;
  };
  if(a % div === 0) {
    sum += div;
  }
  return solution(a, div + 1, sum);
};

module.exports = {
  solution,
};
