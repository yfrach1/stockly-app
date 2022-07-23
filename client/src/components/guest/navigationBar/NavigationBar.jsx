import styles from "./NavigationBar.module.css";
import LogoIcon from "../../../assets/images/app_logo.svg";
import mainView from "../../../app/constant/MainView";
import { Link } from "react-router-dom";

function NavigationBar({ setComponentToView }) {
  return (
    <div className={styles.navigationBarPosition}>
      <div>
        <img className={styles.appLogo} src={LogoIcon} />
      </div>
      <div className={styles.navagationBarLinks}>
        <div
          id={styles.option}
          onClick={() => setComponentToView(mainView.HOME)}
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
          onClick={() => setComponentToView(mainView.SIGN_UP)}
        >
          SignUp
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
