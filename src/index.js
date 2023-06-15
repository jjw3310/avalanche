import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Web3ConnectionContextProvider } from "./components/context/web3Connection.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Web3ConnectionContextProvider>
    <App />
  </Web3ConnectionContextProvider>
);
