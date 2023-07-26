import React from "react";
import { createRoot } from "react-dom/client";

const a = parseFloat(prompt('Podaj liczbe 1'));
const b = parseFloat(prompt('Podaj liczbe 2'));

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<div>{a + b}</div>);
