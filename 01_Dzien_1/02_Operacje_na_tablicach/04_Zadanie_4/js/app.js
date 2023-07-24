const allProductsRef = document.querySelector('#all-products');
const newListRef = document.querySelector('#filtered-products');

const products = [
	{
		name: "Fiat Tipo",
		category: "car",
		price: 29900,
		condition: "new"
	},
	{
		name: "MacBook Pro",
		category: "computer",
		price: 9999,
		condition: "new"
	},
	{
		name: "Xiaomi Redmi Note 8",
		category: "phone",
		price: 2399,
		condition: "new"
	},
	{
		name: "Audi A6",
		category: "car",
		price: 23450,
		condition: "used"
	},
	{
		name: "Samsung Galaxy Note 9",
		category: "phone",
		price: 1899,
		condition: "used"
	},
	{
		name: "Seat Leon",
		category: "car",
		price: 66000,
		condition: "new"
	},
	{
		name: "Nike Sneakers",
		category: "shoes",
		price: 345,
		condition: "new"
	},
	{
		name: "Dacia Logan",
		category: "car",
		price: 33500,
		condition: "new"
	}
];

products.forEach(function (item) {
	const li = document.createElement('li');
	const strong = document.createElement('strong');
	const span = document.createElement('span');
	span.textContent = `${item.price} - ${item.condition}`;
	strong.textContent = `${item.name} `;
	li.appendChild(strong);
	li.appendChild(span);

	allProductsRef.appendChild(li);

})
const car = products.filter((item) => {
	if (item.category === "car" && item.condition === "new" && item.price <= 45000);
	return item;
});

car.forEach((item) => {
	const li = document.createElement('li');
	const strong = document.createElement('strong');
	const span = document.createElement('span');
	span.textContent = `${item.price} - ${item.condition}`;
	strong.textContent = `${item.name} `;
	li.appendChild(strong);
	li.appendChild(span);

	newListRef.appendChild(li);
}
)
console.log(allProductsRef);
console.dir(allProductsRef);
