import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import store from "./store";
import { Provider } from "react-redux";
import "./css/index.css";

document.addEventListener("contextmenu", (event) => event.preventDefault());

if (navigator.userAgent.match(/samsung/i)) {
  alert(
    "현재 웹표준을 정상적으로 지원하지 않는 브라우저(Samsung Internet)를 사용하고 있습니다. " +
      "따라서 웹페이지가 의도된 대로 표시되지 않을 수 있으며 " +
      "웹표준을 정상적으로 지원하는 다른 웹브라우저(Firefox, Microsoft Edge, Google Chrome 등)를 " +
      "사용하시길 권장합니다."
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
