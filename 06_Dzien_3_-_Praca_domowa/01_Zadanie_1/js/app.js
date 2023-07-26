import React, { Component } from "react";
import { createRoot } from "react-dom/client";


const userName = prompt('Podaj ime');
const userAge = prompt('Podaj svoj vek');


const container = document.getElementById("app");
const root = createRoot(container);
root.render(<h1>{userName} is {userAge} years old</h1>);
