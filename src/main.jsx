import React from "react";
import ReactDOM from "react-dom/client";
import { DenalanApp } from "./DenalanApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DenalanApp />
    </BrowserRouter>
  </React.StrictMode>
);
