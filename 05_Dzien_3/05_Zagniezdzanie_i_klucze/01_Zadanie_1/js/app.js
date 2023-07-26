import React from "react";
import { createRoot } from "react-dom/client";

import people from "./data/people";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<div>
	{
		people.map(item => {
			return <div key={item.id}>{item.name} {item.surname}</div>
		})
	}
</div>);
