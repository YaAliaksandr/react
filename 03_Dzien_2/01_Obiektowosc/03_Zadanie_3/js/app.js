const foods = [];

class Food {
	constructor(name, protein, carbs, fat) {
		this.name = name;
		this.protein = protein;
		this.carbs = carbs;
		this.fat = fat;
	}
}

class FastFood extends Food {
	constructor(name, protein, carbs, fat) {
		super(name, protein, carbs, fat);
		this.summ = 0;

	}
	getSummKcal() {
		this.sum = this.protein * 4 + this.carbs * 4 + this.fat * 9;
		return this.sum;
	}

}

class FatFreeFood extends Food {
	constructor(name, protein, carbs, fat) {
		super(name, protein, carbs, fat);
		this.summ = 0;

	}
	getSummKcal() {
		this.sum = this.protein * 4 + this.carbs * 4 + this.fat * 9;
		return this.sum;
	}
}


const productsRef = document.querySelector('#products');
const buttonRef = document.querySelector('.btn');
const nameRef = document.querySelector('#name');
const proteinsRef = document.querySelector('#proteins');
const carbsRef = document.querySelector('#carbs');
const fatRef = document.querySelector('#fat');

const contextCreator = function (obj) {

	const myLi = document.createElement('li');
	myLi.textContent = `${obj.name} consist of : protein - ${obj.protein}, carbs - ${obj.carbs} , fat - ${obj.fat} . Kcal = ${obj.getSummKcal()}`;

	productsRef.appendChild(myLi);
}
const recept = function (e) {
	e.preventDefault();

	const name = nameRef.value;
	const protein = parseFloat(proteinsRef.value);
	const fat = parseFloat(fatRef.value);
	const carbs = parseFloat(carbsRef.value);

	let sumKcal;
	let prodClass;
	if (!isNaN(protein) && !isNaN(fat) && !isNaN(carbs)) {

		sumKcal = protein * 4 + fat * 9 + carbs * 4;
		if (sumKcal > 250) {
			prodClass = new FastFood(name, protein, carbs, fat);
			foods.push(prodClass);

		} else {

			prodClass = new FatFreeFood(name, protein, carbs, fat);
			foods.push(prodClass);

		}
		console.log(foods);
		contextCreator(prodClass);

		return;
	} else {
		console.error("Uncorrect value of Proteins, please check your recept again.")
	}

}


buttonRef.addEventListener('click', recept);