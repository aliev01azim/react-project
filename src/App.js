import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import LeftBar from "./components/LeftBar/LeftBar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import Settings from "./components/Profile/Settings/Settings.jsx";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

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
            () => < Profile / > }
        />{" "} <
        Route path = "/Dialogs"
        render = {
            () => < DialogsContainer / > }
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
        Route path = "/Users"
        render = {
            () => < UsersContainer / > }
        />{" "} <
        /div>{" "} <
        /div>{" "} <
        /BrowserRouter>
    );
};

export default App;