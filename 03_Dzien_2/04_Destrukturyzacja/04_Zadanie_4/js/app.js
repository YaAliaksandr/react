const generateRandomNumbers = () => {
	const randomNumbers = [];

	for (let i = 0; i < 6; i++) {
		randomNumbers.push(Math.floor(Math.random() * 6))
	}

	return randomNumbers;
}

const [nb1, , nb2] = generateRandomNumbers();

console.log(nb1)
console.log(nb2)