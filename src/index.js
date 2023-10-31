import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/redux-store";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderIntaireTree = (state) => {
    root.render(<App  store={store}/>);
}

rerenderIntaireTree(store.getState());
store.subscribe( () => {
    let state = store.getState();
    rerenderIntaireTree(state);
});
