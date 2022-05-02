const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address( n ) {
  if(n.length === 17){
  let arr = n.split('-');
  let res = arr.map(element =>  element.split(''));
  return res.every(element => element.every(item => (/[0-9A-F]/).test(item)));
}
return false;
}
module.exports = {
  isMAC48Address
};
