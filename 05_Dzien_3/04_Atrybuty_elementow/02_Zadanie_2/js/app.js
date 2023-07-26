import React from "react";
import { createRoot } from "react-dom/client";

const number1 = genNumber();
const number2 = genNumber();

const answer = parseInt(prompt(`Jaki będzie wynik dodawania ${number1} + ${number2}`));

function genNumber() {
	return Math.round(Math.random() * 9 + 1);
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<div>
	{
		answer === number1 + number2
			? <div style={{ backgroundColor: 'green' }}>Odpowiedź poprawna </div>
			: <div style={{ backgroundColor: 'red' }}>Odpowiedź niepoprawna </div>
	}
</div>);
