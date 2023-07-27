import React, { Component } from "react";
import { createRoot } from "react-dom/client";

const WyszukiwarkaFunkcyjna = () => {
	return (
		<div>
			<input type="text" />
			<button type="submit">Wyszukaj</button>
		</div>
	)
}

class WyszukiwarkaKlasowa extends Component {
	render() {
		return (
			<div>
				<input type="text" />
				<button type="submit">Wyszukaj</button>
			</div>
		)
	}
}


const container = document.getElementById("app");
const root = createRoot(container);
root.render(<>
	<WyszukiwarkaFunkcyjna />
	<WyszukiwarkaKlasowa />
</>);
