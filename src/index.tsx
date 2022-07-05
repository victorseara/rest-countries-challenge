import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

if (process.env.NODE_ENV === "development") {
  document.querySelector("body")?.classList.add("debug-screens");
  const { worker } = require("./mocks/browser");
  worker.start();
}

const el = document.getElementById("root");
const root = createRoot(el as Element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
