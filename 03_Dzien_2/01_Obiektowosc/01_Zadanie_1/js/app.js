class Vehicle {
	getInfo() {
		console.log('Jestem pojazdem')
	}
}

class Boat extends Vehicle {
	swim() {
		console.log('Pływam');
	}
}

class Car extends Vehicle {
	ride() {
		console.log('Jadę')
	}
}

class Plane extends Vehicle {
	fly() {
		console.log('Latam')
	}
}

const boat = new Boat();
boat.swim();
boat.getInfo();

const car = new Car();
car.ride();
car.getInfo();

const plane = new Plane();
plane.fly();
plane.getInfo();
