import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import store from "./app/store";
import { Provider } from "react-redux";
import "./css/index.css";

document.addEventListener("contextmenu", (event) => event.preventDefault());

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
