import React, { Component } from "react";
import { createRoot } from "react-dom/client";



const colors = ['Niebieski', 'Zielony', 'Żółty'];
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<div>
	{
		// colors.join('\u00A0 \u00A0 \u00A0 \u00A0')
		colors.join(' ')
	}
</div>
);
