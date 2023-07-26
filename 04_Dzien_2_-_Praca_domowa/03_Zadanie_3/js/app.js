const sayHello = function (...params) {
	params.forEach((it) => console.log(`Hello ${it}`))
};
sayHello("Ania", "Kasia", "Steve", "Bogumił");