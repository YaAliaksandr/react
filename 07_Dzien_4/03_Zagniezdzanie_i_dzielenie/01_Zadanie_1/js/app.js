import React, { Component } from "react";
import { createRoot } from "react-dom/client";


const CurrencyConverter = (props) => {
	return (
		<div>
			<strong>{props.value}</strong> {props.from} => <strong>{(props.value * props.rate).toFixed(2)}</strong> {props.to}
		</div>
	)
}

const App = () => {
	return (
		<>
			<CurrencyConverter from="EUR" to="PLN" value={200} rate={4.5} />
			<CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />
			<CurrencyConverter from="EUR" to="Ruble" value={200} rate={213123.000} />
		</>
	)
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
