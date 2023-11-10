import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShopliftProvider from "./contexts/Shopify.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopliftProvider>
      <App />
    </ShopliftProvider>
  </React.StrictMode>
);
