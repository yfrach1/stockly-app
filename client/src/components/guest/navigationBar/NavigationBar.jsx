import styles from "./NavigationBar.module.css";
import LogoIcon from "../../../assets/images/app_logo.svg";
import mainView from "../../../app/constant/MainView";
import PropTypes from "prop-types";

import { Link } from "react-router-dom"; // check if to use it or div

function NavigationBar({
  setComponentToView,
  setHideConnectOptionsAction,
  setShowSignUpAction,
}) {
  return (
    <div className={styles.navigationBarPosition}>
      <div>
        <img className={styles.appLogo} src={LogoIcon} />
      </div>
      <div className={styles.navagationBarLinks}>
        <div
          id={styles.option}
          onClick={() => {
            setHideConnectOptionsAction();
            setComponentToView(mainView.HOME);
          }}
        >
          Home
        </div>
        <div
          id={styles.option}
          onClick={() => setComponentToView(mainView.ABOUT_US)}
        >
          About
        </div>
        <div
          id={styles.option}
          onClick={() => setComponentToView(mainView.CONTACT_US)}
        >
          Contact
        </div>
        <div
          className={styles.signUpButton}
          onClick={() => {
            setShowSignUpAction();
            setComponentToView(mainView.SIGN_UP);
          }}
        >
          SignUp
        </div>
      </div>
    </div>
  );
}

NavigationBar.propTypes = {
  //setComponentToView: PropTypes.object, // check about it
  setHideConnectOptionsAction: PropTypes.func,
  setShowSignUpAction: PropTypes.func,
};

NavigationBar.defaultProps = {
  // showConnectOptions: null,
  setHideConnectOptionsAction: () => {},
  setShowSignUpAction: () => {},
};

export default NavigationBar;
