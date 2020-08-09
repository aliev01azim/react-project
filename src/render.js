import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost } from "./redux/state";
import { addMessage } from "./redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render( <
        React.StrictMode >
        <
        App state = { state }
        addPost = { addPost }
        addMessage = { addMessage }
        />{" "} <
        /React.StrictMode>,
        document.getElementById("root")
    );
};

export default rerenderEntireTree;