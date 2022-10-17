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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
	if (!Array.isArray(members)) return false;

	let teamName = [];
	for (let member of members) {
		if (typeof member === 'string') {
			member = member.replaceAll(" ", "")
			teamName.push(member.slice(0,1).toUpperCase());
		}
	}
	console.log(teamName);
	console.log(teamName.sort().join(''));
	return teamName.sort().join('');
}
// createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])

module.exports = {
  createDreamTeam
};
