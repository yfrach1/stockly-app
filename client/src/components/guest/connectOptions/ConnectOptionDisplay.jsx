import styles from "./ConnectOptionsDisplay.module.css";
import SignUpConnector from "./signUp/SignUp-connector";
import SignInConnector from "./signIn/SignIn-connector";
import PropTypes from "prop-types";

const ConnectOptionDisplay = ({
  showSignIn,
  showSignUp,
  setShowSignInAction,
  setShowSignUpAction,
}) => {
  return (
    <div className={styles.displayContent}>
      <div className={styles.connectionTitles}>
        <div
          className={showSignIn ? styles.currentOption : undefined}
          onClick={setShowSignInAction}
        >
          Log In
        </div>
        <div
          className={showSignUp ? styles.currentOption : undefined}
          onClick={setShowSignUpAction}
        >
          Sign Up
        </div>
      </div>
      {showSignIn ? <SignInConnector /> : null}
      {showSignUp ? <SignUpConnector /> : null}
    </div>
  );
};

ConnectOptionDisplay.propTypes = {
  showSignIn: PropTypes.bool,
  showSignUp: PropTypes.bool,
  setShowSignInAction: PropTypes.func,
  setShowSignUpAction: PropTypes.func,
};

ConnectOptionDisplay.defaultProps = {
  showSignIn: false,
  showSignUp: false,
  setShowSignInAction: () => {},
  setShowSignUpAction: () => {},
};
export default ConnectOptionDisplay;
