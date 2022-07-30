import React, { Fragment, useEffect } from "react";
import Main from "./components/guest/MainPage/Main";
import { getData } from "../../client/src/app/services/userService";
import UserView from "./components/user/userView/UserView";
function App({ userAuth, checkUserTokenAction }) {
  useEffect(() => {
    console.log("in use effect");
    checkUserTokenAction();
  }, []);
  return (
    <div style={{ width: "100%" }}>{userAuth ? <UserView /> : <Main />}</div>
  );
}
export default App;
