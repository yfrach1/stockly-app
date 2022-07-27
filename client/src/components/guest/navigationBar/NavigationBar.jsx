import styles from "./NavigationBar.module.css";
import LogoIcon from "../../../assets/images/app_logo.svg";
import ClientRoute from "../../../navigation/Route";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <div className={styles.navigationBarPosition}>
      <div>
        <img className={styles.appLogo} src={LogoIcon} alt={""} />
      </div>
      <div className={styles.navagationBarLinks}>
        <NavLink id={styles.option} to={ClientRoute.Guest.home}>
          Home
        </NavLink>
        <NavLink id={styles.option} to={ClientRoute.Guest.aboutUs}>
          About
        </NavLink>
        <NavLink id={styles.option} to={ClientRoute.Guest.contactUs}>
          Contact
        </NavLink>
        <NavLink className={styles.signUpButton} to={ClientRoute.Guest.signUp}>
          SignUp
        </NavLink>
      </div>
    </div>
  );
}

export default NavigationBar;
