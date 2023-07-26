import React from "react";
import { createRoot } from "react-dom/client";
import H2 from "./H2";

const cont = document.querySelector('#app');
const root = createRoot(cont);
root.render(<>
	<h1>Przywitanie z React</h1>
	<H2 />
	<H2 />
</>)
