import React from "react";
import { createRoot } from "react-dom/client";
import animals from './data/animals';

// const animalElements = animals.map((animal, index) =>
// 	<p key={index}>{animal}</p>
// );
// const animalElementsForOf = [];
// for (const [index, animal] of animals.entries()) {
// 	animalElementsForOf.push(<p key={index}>{animal}</p>);
// }
// console.log(animalElements);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<>
	<section>
		<p>{animals.length}</p>
		<p>{animals.join(',')}</p>
		<div style={{ backgroundColor: "red", padding: "20px" }}>
			{animals.map(function (animal, index) {
				return (<p key={index}>{animal}</p>)
			})
			}
		</div>




	</section>
</>);
