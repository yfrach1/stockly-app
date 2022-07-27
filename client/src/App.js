import React, { Fragment } from "react";
import Main from "./components/guest/MainPage/Main";

import UserView from "./components/user/userView/UserView";
function App({ userAuth }) {
  return <Fragment>{!userAuth ? <UserView /> : <Main />}</Fragment>;
}
export default App;
