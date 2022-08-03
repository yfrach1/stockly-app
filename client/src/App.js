import React, { Fragment, useEffect } from "react";
import Main from "./components/guest/MainPage/Main";
import styles from "./App.module.css";
import { Toast } from "monday-ui-react-core";
import UserView from "./components/user/userView/UserView";
import PackmanLoader from "./components/loading/packmanLoader/PackmanLoader";
function App({
  userAuth,
  redirectLoading,
  checkUserTokenAction,
  showToast,
  toastParam,
  hideToastAction,
}) {
  const { toastType, message, autoHideDuration } = toastParam;
  useEffect(() => {
    checkUserTokenAction();
  }, [checkUserTokenAction]);
  return (
    <Fragment>
      <Toast
        open={showToast}
        type={Toast.types[toastType]}
        className={`monday-storybook-toast_wrapper ${styles.mondayStyleToast}`}
        onClose={hideToastAction}
        autoHideDuration={autoHideDuration}
      >
        {message}
      </Toast>
      {redirectLoading ? (
        <PackmanLoader />
      ) : (
        <div className={styles.app}>{userAuth ? <UserView /> : <Main />}</div>
      )}
    </Fragment>
  );
}
export default App;
