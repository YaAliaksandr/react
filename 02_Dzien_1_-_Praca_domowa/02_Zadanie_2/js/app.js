function Weather(pomiar) {
	this.pomiar = pomiar;
}

Weather.prototype.getAvgTemperature = function () {
	const sum = this.pomiar.reduce((total, item) => total + item);
	const avg = sum / this.pomiar.length

	const avgWrapper = document.querySelector("#avg-temp");
	avgWrapper.innerText = avg;

	return avg;
}

const myWeather = new Weather([19, 11, -9]);
console.log(myWeather.getAvgTemperature())


const Basket = function (t1, t2, t3) {
	this.mp1 = t1;
	this.mp2 = t2;
	this.mp3 = t3;
	this.summ = 0;
}
const obBasket = new Basket(1, 2, 3);
Basket.prototype.getAvgTemperature = function () {

	// const middle = (this.mp1 + this.mp2 + this.mp3) / 3;
	this.summ = (this.mp1 + this.mp2 + this.mp3) / 3;
	spanRef.textContent = this.summ;
	console.log(this)
}


obBasket.getAvgTemperature();