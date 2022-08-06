import styles from "./ConnectOptionsDisplay.module.css";
import SignUpConnector from "./signUp/SignUp-connector";
import SignInConnector from "./signIn/SignIn-connector";
import ClientRoute from "../../../navigation/Route";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ConnectOptionDisplay = ({ showSignIn, showSignUp }) => {
  return (
    <div className={styles.displayContent}>
      {showSignIn ? <SignInConnector /> : null}
      {showSignUp ? <SignUpConnector /> : null}
      {showSignUp ? (
        <Link className={styles.textLink} to={ClientRoute.Guest.signIn}>
          Already registered? Click to sign in
        </Link>
      ) : null}
      {showSignIn ? (
        <Link className={styles.textLink} to={ClientRoute.Guest.signUp}>
          First time here? Please click to register
        </Link>
      ) : null}
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
