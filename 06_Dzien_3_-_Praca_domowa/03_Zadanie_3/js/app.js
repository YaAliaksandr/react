import React, { Component } from "react";
import { createRoot } from "react-dom/client";

const size = "500px";
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<div style={{ width: size, height: size, color: "blue" }}>Hello, World!</div>);
