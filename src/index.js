import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/redux-store";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderIntaireTree = () => {
    root.render(
    <Provider store={store}>
        <App />
    </Provider>
    );
}

rerenderIntaireTree();
store.subscribe(() => rerenderIntaireTree());