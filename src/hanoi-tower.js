const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
	disksNumber = +disksNumber;
	turnsSpeed = +turnsSpeed;

	const tower = {
		turns: 0,
		seconds: 0,
	};

	const secPerHour = 3600;
	const speedOfDisk = turnsSpeed / secPerHour;

	tower.turns = Math.pow(2, disksNumber) - 1;
	// calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
	// Math.pow(2, 9) - 1 = 511
	tower.seconds = Math.floor(tower.turns / speedOfDisk);

	return tower;
}

module.exports = {
  calculateHanoi
};
