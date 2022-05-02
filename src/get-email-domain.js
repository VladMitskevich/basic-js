const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arr = Array.from(email);
  let spliced = arr.splice(arr.lastIndexOf('@') + 1);
  return spliced.join('');
  
}

module.exports = {
  getEmailDomain
};
