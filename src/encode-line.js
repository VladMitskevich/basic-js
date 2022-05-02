const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = str.split('');
  let count = 1;
  let arr = [];
  for(let i = 0; i < newStr.length; i++){
    let counter;
    if(newStr[i] === newStr[i+1]){
      count++;
    }
    else{
      if(count === 1){
        counter = `${newStr[i]}`;
      }
      else{
        counter = `${count}${newStr[i]}`;
      }
      arr.push(counter);
      count = 1;
    }
  }
  return arr.join('');
}

module.exports = {
  encodeLine
};
