import React from "react";
import "./App.css";
import LeftBar from "./components/LeftBar/LeftBar.jsx";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import Settings from "./components/Settings/Settings.jsx";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderContainer />
        <LeftBar />
        <div className="app-wrapper-content">
          <Route path="/Profile/:userId?" render={() => <ProfileContainer />} />{" "}
          <Route path="/Dialogs" render={() => <DialogsContainer />} />{" "}
          <Route path="/News" render={() => <News />} />{" "}
          <Route path="/Music" render={() => <Music />} />{" "}
          <Route path="/Settings" render={() => <Settings />} />{" "}
          <Route path="/users" render={() => <UsersContainer />} />{" "}
          <Route path="/login" render={() => <Login />} />{" "}
        </div>{" "}
      </div>{" "}
    </BrowserRouter>
  );
};

export default App;
