class Duck {
	constructor() {
		this.type = "ordinary duck";
	}

	sound() {
		console.log("Quack quack");
	}

	swim() {
		console.log("I'm swimming...");
	}

	print() {
		console.log(`Looks like ${this.type}`);
	}

	fly() {
		console.log("I'm flying...");
	}
}

class WildDuck extends Duck {
	constructor() {
		super();
		this.type = "wild";
	}
}

class MallardDuck extends Duck {
	constructor() {
		super();
		this.type = "mallard";
	}
}

class RubberDuck extends Duck {
	constructor() {
		super();
		this.type = "rubber";
	}

	fly() {
		console.log("Rubber ducks can't fly!");
	}
}

const donaldDuck = new Duck();
donaldDuck.sound();
donaldDuck.swim();
donaldDuck.print();
donaldDuck.fly();

const daffyDuck = new WildDuck();
daffyDuck.sound();
daffyDuck.swim();
daffyDuck.print();
daffyDuck.fly();

const daisyDuck = new MallardDuck();
daisyDuck.sound();
daisyDuck.swim();
daisyDuck.print();
daisyDuck.fly();

const howardTheDuck = new RubberDuck();
howardTheDuck.sound();
howardTheDuck.swim();
howardTheDuck.print();
howardTheDuck.fly();


