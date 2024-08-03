import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "@/contexts/ContextProvider/index.jsx";
import { FieldValue, app } from "@/lib/fb";

console.log("update context value later, change FieldValue");
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider value={{ app, FieldValue }}>
      <App />
    </ContextProvider>
  </React.StrictMode>,
);
