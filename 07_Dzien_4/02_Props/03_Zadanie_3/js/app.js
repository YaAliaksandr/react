import React, { Component } from "react";
import { createRoot } from "react-dom/client";

const someArr = [12, 22, 33];

const Sum = ({ arr }) => {
	return (<h1>{arr.reduce((acc, it) => { return acc += it }, 0)}</h1>)
}
class Sum1 extends Component {
	render() {
		const { arr } = this.props;
		return (<h1>{arr.reduce((acc, it) => { return acc += it }, 0)}</h1>)
	}
}



const container = document.getElementById("app");
const root = createRoot(container);
root.render(<>
	<Sum arr={someArr} />
	<Sum1 arr={[3, 4, 6]} />
</>);
