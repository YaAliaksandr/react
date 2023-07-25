const getAverage = (...liczby) => {
	const sum = liczby.reduce((total, item) => total += item);
	return sum / liczby.length
}

console.log(getAverage(2, 4, 5, 6, 7, 79));