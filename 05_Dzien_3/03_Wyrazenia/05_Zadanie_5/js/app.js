import React from "react";
import { createRoot } from "react-dom/client";

const numberA = parseFloat(prompt("Podaj pierwszą liczbę"));
const oper = prompt("Jakie działanie chcesz wykonać?" +
	"Wybierz +, -, * lub /");
const numberB = parseFloat(prompt("Podaj drugą liczbę"));

const calc = (a, b, operation) => {
	switch (operation) {
		case '+':
			return <h1>{a + b}</h1>;
		case '-':
			return <h2>{a - b}</h2>
		case '*':
			return <h3>{a * b}</h3>
		case '/':
			return <h4>{a / b}</h4>
		default:
			return <span>Podałeś nieprawidłowe równanie!</span>
	}
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<div>{calc(numberA, numberB, oper)}</div>);