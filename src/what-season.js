const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
	if (!date) return "Unable to determine the time of year!";
	if ((date instanceof Date === false) || Object.keys(date).length > 0 &&
	 arguments.length > 0) throw new Error("Invalid date!");

	const month = date.getMonth();
	const day = date.getDate();
	let season = "";

	if (
		(month === 0 && day <= 31) ||
		(month === 1 && day <= 29 && date.getFullYear() % 4 === 0) ||
		(month === 1 && day <= 28 && date.getFullYear() % 4 !== 0) ||
		(month === 11 && day <= 31)
	) season = "winter";
		else if (
		(month === 2 && day <= 31) ||
		(month === 3 && day <= 30) ||
		(month === 4 && day <= 31)
	) season = "spring";

	else if (
		(month === 5 && day <= 30) ||
		(month === 6 && day <= 31) ||
		(month === 7 && day <= 31)
	) season = "summer";

	else if (
		(month === 8 && day <= 30) ||
		(month === 9 && day <= 31) ||
		(month === 10 && day <= 30)
	) season = "fall"; 

	else throw new Error("Invalid date!");

	console.log(season);
	return season;
	// if (
	// 	(month === 0 && day <= 31) ||
	// 	(month === 1 && day <= 29 && date.getFullYear() % 4 === 0) ||
	// 	(month === 1 && day <= 28 && date.getFullYear() % 4 !== 0) ||
	// 	(month === 11 && day <= 31)
	// ) {
	// 	season = "winter"
	// } else if (
	// 	(month === 2 && day <= 31) ||
	// 	(month === 3 && day <= 30) ||
	// 	(month === 4 && day <= 31)
	// ) {
	// 	season = "spring";
	// } else if (
	// 	(month === 5 && day <= 30) ||
	// 	(month === 6 && day <= 31) ||
	// 	(month === 7 && day <= 31)
	// ) {
	// 	season = "summer";
	// } else if (
	// 	(month === 8 && day <= 30) ||
	// 	(month === 9 && day <= 31) ||
	// 	(month === 10 && day <= 30)
	// ) {
	// 	season = "fall";
	// } else throw new Error("Invalid date!");

	// console.log(season);
	// return season;
}
getSeason(new Date(2020, 02, 31));
// getSeason(12);

module.exports = {
  getSeason
};
