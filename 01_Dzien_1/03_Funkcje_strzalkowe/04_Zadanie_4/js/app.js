const myUlRef = document.querySelector('#menu');

const App = function () {
	this.websites = ["google", "twitter", "facebook"];
	this.links = [];
};

App.prototype.generateLinks = function () {
	this.websites.forEach(it => {
		// it = `https://${it}.com`;
		this.links.push(`https://${it}.com`);
	})
};

App.prototype.insertLinks = function () {
	this.links.forEach((it) => {
		const myLi = document.createElement('li');
		myLi.innerHTML = `<a href ="${it}">${it}</a>`;
		myUlRef.appendChild(myLi);

	})
	// this.links.forEach(function (it) {
	// 	const myLi = document.createElement('li');
	// 	myLi.innerHTML = `<a href ="${it}">${it}</a>`;
	// 	myUlRef.appendChild(myLi);
	// 	console.log(this);
	// })
};


const app = new App();
app.generateLinks();
app.insertLinks();

// console.log(app.links);
// console.log(app);

const a = {
	a: 3,
	func: function () {
		console.log(this.a)
	},
	func1: () => {
		console.log(this.a)
	}
}
a.func();
a.func1();