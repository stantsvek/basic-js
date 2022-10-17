const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */


// return 0 if no cats found
// "^^" - так котик себя выдает

function countCats(...args) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
	const arg = args[0];
	let numberOfCats = 0;

	for (let i = 0; i < arg.length; i++) { // обходим строчки
    for (let j = 0; j < arg[i].length; j++) { // обходим внутренние элем
      if (arg[i][j] === '^^') {
				numberOfCats++;
      }
    }
  }

	if (numberOfCats > 0) {
		return numberOfCats;
	} else { return 0; }
}
// countCats([
// 	['##', 'dd', '00'],
// 	['^^', '..', 'ss'],
// 	['AA', 'dd', 'Oo'],
// ]);

module.exports = {
  countCats
};
