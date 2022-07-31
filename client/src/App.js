import React, { Fragment, useEffect } from "react";
import Main from "./components/guest/MainPage/Main";
import styles from "./App.module.css";
import { getData } from "../../client/src/app/services/userService";
import UserView from "./components/user/userView/UserView";
import PackmanLoader from "./components/loading/packmanLoader/PackmanLoader";
import OpacityLoader from "./components/loading/fetchStockLoader/OpacityLoader";
function App({ userAuth, redirectLoading, checkUserTokenAction }) {
   useEffect(() => {
      console.log("in use effect");
      checkUserTokenAction();
   }, [userAuth]);
   return (
      <>
         {redirectLoading ? (
            <PackmanLoader />
         ) : (
            <div className={styles.app}>{userAuth ? <UserView /> : <Main />}</div>
         )}
      </>
   );
}
export default App;
