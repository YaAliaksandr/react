import React, { Component } from "react";
import { createRoot } from "react-dom/client";

const LikeBox = () => {

	return (
		<div>
			<p>1000</p>
			<button>Lubie to!</button>
		</div>
	)
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<>
	<LikeBox />
</>);
