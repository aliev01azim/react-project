import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import LeftBar from "./components/LeftBar/LeftBar.jsx";

import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import Settings from "./components/Profile/Settings/Settings.jsx";

import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { addPost, addMessage } from "./redux/state";

const App = (props) => {
    return ( <
        BrowserRouter >
        <
        div className = "wrapper" >
        <
        Header / >
        <
        LeftBar / >
        <
        div className = "app-wrapper-content" >
        <
        Route path = "/Profile"
        render = {
            () => ( <
                Profile PostData = { props.state.ProfilePage.PostData }
                addPost = { addPost }
                />
            )
        }
        /> <
        Route path = "/Dialogs"
        render = {
            () => ( <
                Dialogs DialogsData = { props.state.MessagePage.DialogsData }
                MessagesData = { props.state.MessagePage.MessagesData }
                addMessage = { addMessage }
                />
            )
        }
        />{" "} <
        Route path = "/News"
        render = {
            () => < News / > }
        />{" "} <
        Route path = "/Music"
        render = {
            () => < Music / > }
        />{" "} <
        Route path = "/Settings"
        render = {
            () => < Settings / > }
        />{" "} <
        /div>{" "} <
        /div>{" "} <
        /BrowserRouter>
    );
};

export default App;