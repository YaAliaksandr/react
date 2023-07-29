import React from "react";
import { createRoot } from "react-dom/client";
import tablica from "./data/products";

const ReceiptHeader = () => {
	return (
		<thead>
			<tr>
				<td>Nazwa</td>
				<td>Cena</td>
				<td>Ilość</td>
				<td>Łączna cena</td>
			</tr>
		</thead>
	);
};

const ReceiptItem = ({ item }) => {
	return (
		<tr key={item.code}>
			<td>{item.name}</td>
			<td>{item.single_price} zł</td>
			<td>{item.qty}</td>
			<td>{(item.single_price * item.qty).toFixed(2)}</td>
		</tr>
	);
};

const ReceiptItems = ({ items }) => {
	return (
		<tbody>
			{items.map((item) => (
				<ReceiptItem key={item.code} item={item} />
			))}
		</tbody>
	);
};

const ReceiptFooter = ({ sum }) => {
	return (
		<tfoot>
			<tr>
				<td>Razem</td>
				<td>-</td>
				<td>-</td>
				<td>{sum.toFixed(2)}</td>
			</tr>
		</tfoot>
	);
};

const Receipt = ({ items }) => {
	const sum = items.reduce(
		(total, item) => total + item.single_price * item.qty,
		0
	);

	return (
		<table className="table">
			<ReceiptHeader />
			<ReceiptItems items={items} />
			<ReceiptFooter sum={sum} />
		</table>
	);
};

const App = () => {
	return <Receipt items={tablica} />;
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);

// import React from "react";
// import { createRoot } from "react-dom/client";

// import tablica from './data/products';

// const Receipt = (props) => {
//   console.log(props);

//   const sum = props.items.reduce((total, item) => {
//     return total + item.single_price * item.qty;
//   }, 0);

//   console.log(sum);

//   return (
//     <table className="table">
//       <thead>
//         <tr>
//           <td>Nazwa</td>
//           <td>Cena</td>
//           <td>Ilość</td>
//           <td>Łączna cena</td>
//         </tr>
//       </thead>
//       <tbody>

//       {props.items.map(el => {
//         return <tr key={el.code}>
//           <td>{el.name}</td>
//           <td>{el.single_price} zł</td>
//           <td>{el.qty}</td>
//           <td>{(el.single_price * el.qty).toFixed(2)}</td>
//         </tr>
//       })}

//       </tbody>

//       <tfoot>
//         <tr>
//           <td>Razem</td>
//           <td>-</td>
//           <td>-</td>
//           <td>
//             { sum.toFixed(2)  }
//           </td>
//         </tr>
//       </tfoot>
//     </table>
//   )
// }

// const App = () => {
//   return (
//     <Receipt items={tablica} />
//   )
// }


// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(<App />);