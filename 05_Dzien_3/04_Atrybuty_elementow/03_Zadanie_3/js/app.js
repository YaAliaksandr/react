// import React from "react";
// import { createRoot } from "react-dom/client";


// OK too
// const stRed = {
// 	height: "100px",
// 	backgroundColor: "red"
// };
// const stGreen = {
// 	height: "100px",
// 	backgroundColor: "green"
// };

// const stBlue = {
// 	height: "100px",
// 	backgroundColor: "blue"
// };

// const redDiv = <div style={stRed} />;
// const greenDiv = <div style={stGreen} />;
// const blueDiv = <div style={stBlue} />;

// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(
// 	<>
// 		{redDiv}
// 		{greenDiv}
// 		{blueDiv}
// 	</>
// );

import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const colors = ["red", "green", "blue"];

const divElements = colors.map((color) => (
	<div key={color} style={{ height: "100px", backgroundColor: color }} />
));

root.render(<>{divElements}</>);
