
const runInterval = (n = 8) => {
	let counter = 0;
	const funcInterval = setInterval(() => {
		console.log('Hello');
		counter++;
		if (counter === n) {
			clearInterval(funcInterval);
		}

	}, 500);
}
runInterval(10);