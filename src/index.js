import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

let posts = [
  { id: 1, message: "Hello, how are you", likesCount: 6 },
  { id: 2, message: "Very good", likesCount: 10 },
  { id: 3, message: "not know about it", likesCount: 8 },
  { id: 4, message: "it`s cool", likesCount: 19 },
];

let dialogs = [
  { id: 1, name: "Dima" },
  { id: 2, name: "Andrey" },
  { id: 3, name: "Sveta" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Jora" },
  { id: 6, name: "Valera" },
];

let messages = [
  { id: 1, message: "Hi!!!!!!" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Fine" },
  { id: 4, message: "And you?" },
  { id: 5, message: "Me too" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App posts={posts} dialogs={dialogs} messages={messages}/>);
