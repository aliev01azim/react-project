import React from "react";
import logo from "./logo.svg";
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

const App = () => {
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
        component = { Profile }
        /> <
        Route path = "/Dialogs"
        component = { Dialogs }
        /> <
        Route path = "/News"
        component = { News }
        /> <
        Route path = "/Music"
        component = { Music }
        /> <
        Route path = "/Settings"
        component = { Settings }
        /> <
        /div> <
        /div> <
        /BrowserRouter>
    );
};

export default App;