const cat = {
	name: "Mruczek",
	age: 10,
	getVoice: () => "miau miau"
};

const showAnimal = function ({ name, age: catAge, getVoice }) {
	console.log(`Kot ${name} ma ${catAge} lat i robi ${getVoice()}.`);
}

showAnimal(cat);


// const { name: catName, age: catAge, getVoice } = cat;

// const showAnimal = function (someName, someAge, getVoice) {
// 	console.log(`Kot ${someName} ma ${someAge} lat i robi ${getVoice()}.`)
// };
// showAnimal(catName, catAge, getVoice);