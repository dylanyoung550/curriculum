/**
 * biggestValue - takes in object, returns largest value
 * @param {object} obj
 * @returns {number} max
 */

const solution = (obj)=>{
  return Object.values(obj).reduce((largestValue, value) => {
    if(value > largestValue) {
      largestValue = value;
     } 
    return largestValue;
  })
}

module.exports = {
  solution
}

