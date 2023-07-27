import React, { Component } from "react";
import { createRoot } from "react-dom/client";


const ShopItemHeader = (props) => {
	const { title, image } = props;
	return (
		<header>
			<h1>{title}</h1>
			<img src={image} />
		</header>
	)
}
const ShopItemDescription = ({ description }) => {
	return (
		<article>
			<p>{description}</p>
		</article>
	)
}
const ShopItemPricing = ({ price }) => {
	return (
		<footer>
			Cena: {price} zł
			<button>Kup!</button>
		</footer>
	)
}

const ShopItem = (props) => {
	const { item: { title, image, description, price } } = props;

	return (
		<section>
			<ShopItemHeader title={title} image={image} />
			<ShopItemDescription description={description} />
			<ShopItemPricing price={price} />
		</section>
	)
}


const container = document.getElementById("app");
const root = createRoot(container);
root.render(<ShopItem name="xxx" title="MacBook Pro" item={{
	title: "MacBook Pro",
	image: "https://bit.ly/2EEtduD",
	description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
	price: 9999
}} />);




// import React, { Component } from "react";
// import { createRoot } from "react-dom/client";


// const ShopItemHeader = (props) => {
//   return (
//     <header>
//       {props.children}
//     </header>
//   )
// }
// const ShopItemDescription = (props) => {
//   return (
//     <article>
//       {props.children}
//     </article>
//   )
// }
// const ShopItemPricing = (props) => {
//   return (
//     <footer>
//       {props.children}
//       <button>Kup!</button>
//     </footer>
//   )
// }

// const ShopItem = (props) => {
//   console.log(props)
//   const {title, image, description, price} = props.item;

//   return (
//     <section>
//       <ShopItemHeader title={title} >
//         <h1>{title}</h1>
//         <img src={image} />
//       </ShopItemHeader>
//       <ShopItemDescription>
//         <p>{description}</p>
//       </ShopItemDescription>
//       <ShopItemPricing>
//         Cena: {price} zł
//       </ShopItemPricing>
//     </section>
//   )
// }


// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(<ShopItem name="xxx" title="MacBook Pro" item={{
//   title: "MacBook Pro",
//   image: "https://bit.ly/2EEtduD",
//   description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
//   price: 9999
// }}/>);
