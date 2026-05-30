import React from "react";
import { createRoot } from "react-dom/client";
import Portfolio from "./portfolio_i18n.jsx";  // ./ statt ../

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
