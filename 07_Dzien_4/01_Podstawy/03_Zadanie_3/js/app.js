import React, { Component } from "react";
import { createRoot } from "react-dom/client";

class Menu extends Component {
	render() {
		return (
			<ul>
				<li><a href=''>Strona główna</a></li>
				<li><a href=''>Blog</a></li>
				<li><a href=''>Cennik</a></li>
				<li><a href=''>Kontakt</a></li>
			</ul>
		)
	}
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<Menu />);
