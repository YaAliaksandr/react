class Insect {
	constructor(name, legs) {
		this.name = name;
		this.legs = legs;

	}

}
class Centipede extends Insect {
	constructor(name, legs) {
		super(name, legs);
	}
	getLegs() {
		return `Cześć mam na imię ${this.name} jestem stonogą i mam ${this.legs} nóg`;
	}
}
class Spider extends Insect {
	constructor(name, legs) {
		super(name, legs);
	}
	getLegs() {
		return `Cześć mam na imię ${this.name} jestem pająkiem i mam ${this.legs} nóg`;
	}
}

const spiderRef = document.querySelector('#info-spider');

const centipedRef = document.querySelector('#info-centipede');

spiderRef.innerText = new Spider("Majkel", 8).getLegs();
centipedRef.innerText = new Centipede("Lucy", 20).getLegs();


