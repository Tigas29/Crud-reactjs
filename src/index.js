import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import { Routers } from "./routes";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>
);
