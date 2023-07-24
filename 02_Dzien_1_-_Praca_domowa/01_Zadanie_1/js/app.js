

const getNumbers = (arr) => {
	const newArr = arr.map(it => it * 2);
	return newArr;
}
console.log(getNumbers([1, 2, 5]));