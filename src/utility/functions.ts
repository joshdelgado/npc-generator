/*
*
* Utility
*
*/

// Answer by joshuakcockrell: https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve
export function getRandomNumberStandardDist(min: number, max: number, skew: number) {
	let u = 0, v = 0;
	while (u === 0) u = Math.random() //Converting [0,1) to (0,1)
	while (v === 0) v = Math.random()
	let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)

	num = num / 10.0 + 0.5 // Translate to 0 -> 1
	if (num > 1 || num < 0)
		num = getRandomNumberStandardDist(min, max, skew) // resample between 0 and 1 if out of range

	else {
		num = Math.pow(num, skew) // Skew
		num *= max - min // Stretch to fill range
		num += min // offset to min
	}
	return Math.floor(num);
}

export function randomNumber(min: number, max: number) {
	return Math.floor(Math.random() * (max - min) + min);
}

export function getRandomMapKey(map: Map<any, any>): string {
	const items: string[] = Array.from(map.keys());
	return items[Math.floor(randomNumber(0, items.length))];
}

export function capitalize(word: string): string {
	return word.split('').map((letter, i) => i ? letter.toLowerCase() : letter.toUpperCase()).join('');
}