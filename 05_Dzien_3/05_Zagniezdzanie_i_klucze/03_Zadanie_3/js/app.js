import React from "react";
import { createRoot } from "react-dom/client";
import people from "./data/people";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<>
	{
		people.map((it) => {
			return (<div key={it.id} className="person">
				<img src={it.avatar} />
				<div className="info">
					<h1>{it.title} {it.name} {it.surname}</h1>
					<p>{it.bio}</p>
				</div>
			</div>)
		})
	}
</>);
