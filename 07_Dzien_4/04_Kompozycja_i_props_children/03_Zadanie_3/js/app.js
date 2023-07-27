import React, { Component } from "react";
import { createRoot } from "react-dom/client";

const ob = [
	{
		title: "Mysz komputerowa",
		image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg"
	},
	{
		title: "Klawiatura",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png"
	},
	{
		title: "Laptop programisty",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg"
	}
];


class ShopItemHeader extends Component {
	render() {
		const { dataTitle: title, dataImg: image } = this.props;

		return (<header>
			<h1>{title}</h1>
			<img src={image} alt="Obraz" />
		</header>)
	}
}


class ShopList extends Component {
	render() {
		const { items } = this.props;

		return (
			<div className="shoplist">

				{items.map((it, ind) => {
					return <ShopItemHeader key={ind} dataTitle={it.title} dataImg={it.image} />
				})}
			</div>
		)
	}
}


const container = document.getElementById("app");
const root = createRoot(container);
root.render(<>
	<ShopList items={ob} />
</>);


// it is ok too
// import React, { Component } from "react";
// import { createRoot } from "react-dom/client";

// const arr = [
//   {
//     title: "Mysz komputerowa",
//     image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg"
//   },
//   {
//     title: "Klawiatura",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png"
//   },
//   {
//     title: "Laptop programisty",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg"
//   }
// ];

// const ShopList = (props) => {
//   return (
//     <div className="shoplist ">
//       {props.list.map(item => {
//         return <ShopItemHeader title={item.title} image={item.image} />
//       })}
//     </div>
//   )
// }

// const ShopItemHeader = (props) => {
//   const {title, image} = props;
//   return (
//     <header>
//       <h1>{title}</h1>
//       <img src={image}/>
//     </header>
//   )
// }
// const ShopItemDescription = ({description}) => {
//   return (
//     <article>
//       <p>{description}</p>
//     </article>
//   )
// }
// const ShopItemPricing = ({price}) => {
//   return (
//     <footer>
//       Cena: {price} zł
//       <button>Kup!</button>
//     </footer>
//   )
// }

// const ShopItem = (props) => {
//   const {title, image, description, price} = props.item;

//   return (
//     <section>
//       <ShopItemHeader title={title} image={image}/>
//       <ShopItemDescription description={description} />
//       <ShopItemPricing price={price} />
//     </section>
//   )
// }

// const App = () => {
//   return (
//     <ShopList list={arr} />
//   )
// }

// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(<App />);









