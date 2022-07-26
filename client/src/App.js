import React, { Fragment } from "react";
import Main from "./components/guest/MainPage/Main";
import Sidebar from "./components/user/sideBar/Sidebar";
import UserView from "./components/user/userView/UserView";
import UserViewConnector from "./components/user/userView/UserView-connector";
function App({ userAuth }) {
  return <Fragment>{userAuth ? <UserViewConnector /> : <Main />}</Fragment>;
}

export default App;
