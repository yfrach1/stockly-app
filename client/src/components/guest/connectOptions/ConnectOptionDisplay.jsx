import styles from "./ConnectOptionsDisplay.module.css";
import SignUpConnector from "./signUp/SignUp-connector";
import SignInConnector from "./signIn/SignIn-connector";
import ClientRoute from "../../../navigation/Route";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ConnectOptionDisplay = ({ showSignIn, showSignUp }) => {
  return (
    <div className={styles.displayContent}>
      <div className={styles.connectionTitles}>
        <Link
          className={showSignIn ? styles.currentOption : undefined}
          to={ClientRoute.Guest.signIn}
        >
          Log In
        </Link>
        <Link
          className={showSignUp ? styles.currentOption : undefined}
          to={ClientRoute.Guest.signUp}
        >
          Sign Up
        </Link>
      </div>
      {showSignIn ? <SignInConnector /> : null}
      {showSignUp ? <SignUpConnector /> : null}
    </div>
  );
};

ConnectOptionDisplay.propTypes = {
  showSignIn: PropTypes.bool,
  showSignUp: PropTypes.bool,
};

ConnectOptionDisplay.defaultProps = {
  showSignIn: false,
  showSignUp: false,
};
export default ConnectOptionDisplay;
