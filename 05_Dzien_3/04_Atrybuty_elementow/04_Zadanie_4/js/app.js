import React from "react";
import { createRoot } from "react-dom/client";


const ask = prompt("Jaki kolor ramki");
const st = {
	width: "100px",
	height: "100px",
	borderWidth: "5px",
	borderStyle: "solid",

}
const colorDiv = function (ask) {
	if (ask.indexOf('red') !== -1 || ask.indexOf('green') !== -1 || ask.indexOf('blue') !== -1) {
		st.borderColor = `${ask}`;
		return <div style={st}></div>;
	} else {
		return <div>"Nieprawidłowy kolor"</div>
	}
}


const container = document.getElementById("app");
const root = createRoot(container);
root.render(<>
	{colorDiv(ask)}
</>
);
// import React from "react";
// import { createRoot } from "react-dom/client";

// const container = document.getElementById("app");
// const root = createRoot(container);

// const borderColor = prompt("Podaj kolor ramki (red, green lub blue):");

// const validColors = ["red", "green", "blue"];
// const isValidColor = validColors.includes(borderColor);

// const borderStyle = isValidColor ? { borderColor } : {};

// root.render(
// 	<div
// 		style={{
// 			width: "100px",
// 			height: "100px",
// 			border: "5px solid",
// 			...borderStyle,
// 		}}
// 	>
// 		{isValidColor ? null : "Nieprawidłowy kolor"}
// 	</div>
// );