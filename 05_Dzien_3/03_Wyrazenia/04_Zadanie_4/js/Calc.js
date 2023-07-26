import React from "react";

const val1 = parseFloat(prompt('Podaj liczbe 1'));
const val2 = parseFloat(prompt('Podaj liczbe 2'));
const val3 = prompt('Podaj znak');

const Calc = () => {
	if (val3 === "+") {
		return (<>
			<h1>{val1} {val3} {val2} = {val1 + val2}</h1>
		</>)
	}
	else if (val3 === "-") {
		return (<>
			<h2>{val1} {val3} {val2} = {val1 - val2}</h2>
		</>)
	}
	else if (val3 === "*") {
		return (<>
			<h3>{val1} {val3} {val2} = {val1 * val2}</h3>
		</>);
	} else if (val3 === "/") {
		return (<>
			<h4>{val1} {val3} {val2} = {val1 / val2}</h4>
		</>)
	}

}
export default Calc;
