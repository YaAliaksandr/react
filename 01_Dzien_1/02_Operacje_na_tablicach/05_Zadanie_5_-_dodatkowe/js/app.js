
function randomize(param1, param2, callback) {
	if (typeof callback !== "function") {
		console.error("It is not a function");
		return;
	}

	const min = Math.min(param1, param2);
	const max = Math.max(param1, param2);
	const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	return callback(randomNumber);
}

console.log(randomize(1, 5, function (num) {
	return `Wylosowana liczba to ${num}`
}))
// моё не правильное решение
// function randomize(param1, param2, callback) {
// 	const a = param1;
// 	const b = param2;

// 	if (typeof callback === "function") {
// 		return callback(a, b);

// 	}
// 	else {
// 		console.log("It is not a function");
// 	}
// }

// console.log(randomize(1, 5, function (min, max) {
// 	return Math.round(Math.random() * max + min);
// }))