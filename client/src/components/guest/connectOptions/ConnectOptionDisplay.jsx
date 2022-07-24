import styles from "./ConnectOptionsDisplay.module.css";
import SignIn from "./signIn/SignIn";
import SignUp from "./signUp/SignUp";
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
          className={showSignIn && styles.currentOption}
          onClick={setShowSignInAction}
        >
          Log In
        </div>
        <div
          className={showSignUp && styles.currentOption}
          onClick={setShowSignUpAction}
        >
          Sign Up
        </div>
      </div>
      {showSignIn ? <SignIn /> : null}
      {showSignUp ? <SignUp /> : null}
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
