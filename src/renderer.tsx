// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import * as React from "react";
import { render } from "react-dom";
import MainPage from "./Componets/MainPage";

render(
    <h1>Hello Gays</h1>,
    document.getElementById("root"),
)

