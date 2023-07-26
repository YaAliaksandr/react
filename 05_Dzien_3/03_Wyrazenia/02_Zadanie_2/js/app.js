import React from "react";
import { createRoot } from "react-dom/client";

const year = parseFloat(prompt('Podaj rok'));

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<h1>{new Date().getFullYear() - year}</h1>);
