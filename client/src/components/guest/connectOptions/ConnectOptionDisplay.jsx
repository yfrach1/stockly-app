import styles from "./ConnectOptionsDisplay.module.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import PropTypes from "prop-types";
const ConnectOptionDisplay = ({ showSignIn, showSignUp }) => {
  console.log("showSignIn: ", showSignIn);
  console.log("showSignUp: ", showSignUp);
  return (
    <div className={styles.displayContent}>
      <div className={styles.connectionTitles}>
        <div id={styles.title}>Log In</div>
        <div id={styles.title}>Sign Up</div>
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
