import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./components/bookstore_service_context";
import App from "./components/app";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
