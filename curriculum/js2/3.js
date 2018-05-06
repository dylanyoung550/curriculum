/**
 * Given an array, return an array of the same length
 *   where all elements that are not prime is changed to 1
 * @param {array} a
 * @returns {array}
 */

const isPrime = (a, i=2) => {
if(a<=1) return false;
if(i===a) return true;
if(a % i === 0) return false;
return isPrime(a, i + 1);
}
const solution = (a = [], array = [], i = 0) => {
  console.log(array)
  if(i===a.length) return array;
  if(!isPrime(a[i])){
    array.push(1);
  } else {
    array.push(a[i]);
  }
  return solution(a, array, i+1);
};

module.exports = {
  solution,
};
