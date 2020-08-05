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
                render = {
                    () => < Profile PostData = { props.PostData }
                    />} / >
                    <
                    Route path = "/Dialogs"
                    render = {
                        () => < Dialogs Dialogs = { props.Dialogs }
                        MessagesData = { props.MessagesData }
                        />} / >
                        <
                        Route path = "/News"
                        render = {
                            () => < News / > }
                        /> <
                        Route path = "/Music"
                        render = {
                            () => < Music / > }
                        /> <
                        Route path = "/Settings"
                        render = {
                            () => < Settings / > }
                        /> <
                        /div> <
                        /div> <
                        /BrowserRouter>
                    );
                };

                export default App;