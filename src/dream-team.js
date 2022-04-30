const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 
 function createDreamTeam(members) {
  //  if(!Array.isArray(members)){
  //    return false;
  //  }
   if(!(members instanceof Array)){
     return false;
   }
  if(members){
  let newArr = members.map(element => {
    if(typeof (element) === 'string'){
    element = element.replace(/\s+/g, '');
    return element.toUpperCase().slice(0, 1);
  }
  });
  newArr.sort();
  return newArr.join('');
}
  return false;
}

module.exports = {
  createDreamTeam
};
