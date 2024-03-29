import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store.ts";
import { App } from "./App.tsx";
import { Provider } from "react-redux";
import "./scss/all.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
