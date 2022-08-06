import { useState } from "react";
import styles from "./SignIn.module.css";
import PropTypes from "prop-types";

const SignIn = ({ signInAction }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleInputLoginEmailChange = (e) => setLoginEmail(e.target.value);
  const handleInputLoginPasswordChange = (e) =>
    setLoginPassword(e.target.value);
  const handleSignIn = () => {
    const userData = {
      email: loginEmail,
      password: loginPassword,
    };
    signInAction(userData);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn();
        }}
      >
        <input
          className={styles.inputTextBox}
          type="email"
          placeholder="Email"
          value={loginEmail}
          onChange={handleInputLoginEmailChange}
        />
        <input
          className={styles.inputTextBox}
          type="password"
          placeholder="Password"
          value={loginPassword}
          onChange={handleInputLoginPasswordChange}
        />
        {/* <div>Forgot Password?</div> */}
        <button className={styles.loginButton} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

SignIn.propTypes = {
  signInAction: PropTypes.func,
};

SignIn.defaultProps = {
  signInAction: () => {},
};

export default SignIn;
