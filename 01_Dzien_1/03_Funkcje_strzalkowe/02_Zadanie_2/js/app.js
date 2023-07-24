const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9];

// const getSecondMaxNumber = (arr) => {
// 	arr.sort((a, b) => {
// 		return a - b;
// 	});
// 	return arr.at(-2);
// }
const getSecondMaxNumber = (array) => {
	const arr2 = array.sort((a, b) => b - a)
	return arr2[1]
}

console.log(getSecondMaxNumber(arr1));
// Wynik w consoli: 49 // Największą liczbą w tablicy jest 100, ale my szukaliśmy drugiej największej więc odpowiedzią musi być 49 w tym przypadku
