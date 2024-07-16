import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./index.css";

import { persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const el = document.getElementById("root");
if (el) {
  const root = createRoot(el);
  root.render(
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </Provider>
  );
} else {
  throw new Error("Could not find root element");
}
