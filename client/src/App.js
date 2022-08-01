import React, { Fragment, useEffect } from "react";
import Main from "./components/guest/MainPage/Main";
import styles from "./App.module.css";
import { getData } from "../../client/src/app/services/userService";
import UserView from "./components/user/userView/UserView";
import PackmanLoader from "./components/loading/packmanLoader/PackmanLoader";
import OpacityLoader from "./components/loading/fetchStockLoader/OpacityLoader";
function App({ userAuth, redirectLoading, checkUserTokenAction, showToast, toastParam }) {
   // console.log("userAuth: ", userAuth);
   // console.log("redirectLoading: ", redirectLoading);

   useEffect(() => {
      console.log("in use effect");
      checkUserTokenAction();
   }, []);
   return (
      <>
         {/* <MyToast
        showToast={showToast}
        property={toastParam}
        hideToastAction={hideToastAction}
      /> */}
         {redirectLoading ? (
            <PackmanLoader />
         ) : (
            <div className={styles.app}>{userAuth ? <UserView /> : <Main />}</div>
         )}
      </>
   );
}
export default App;
