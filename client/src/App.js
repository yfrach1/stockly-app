import React from "react";
import Main from "./components/guest/MainPage/Main";
import Sidebar from "./components/user/sideBar/Sidebar";
import UserView from "./components/user/userView/UserView";
function App({ userAuth }) {
  return (
    <div>
      {userAuth ? <UserView /> : <Main />}

      {/* <Sidebar /> */}
    </div>
  );
}

export default App;
