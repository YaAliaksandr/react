import React, { Component } from "react";
import { createRoot } from "react-dom/client";


const someArr = [{
	url: "/",
	text: "Strona główna"
},
{
	url: "/blog",
	text: "Blog"
},
{
	url: "/cennik",
	text: "Cennik"
},
{
	url: "/kontakt",
	text: "Kontakt"
}];

class Menu extends Component {
	render() {
		const { arr } = this.props;
		return (
			<ul>
				{arr.map((it, ind) => {
					return <li key={ind}><a href={it.url}>{it.text}</a></li>
				})}

				{/* <li><a href="/">Strona główna</a></li>
				<li><a href='/blog'>Blog</a></li>
				<li><a href='/cennik'>Cennik</a></li>
				<li><a href='/kontakt'>Kontakt</a></li> */}
			</ul>
		)
	}
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<Menu arr={someArr} />);
