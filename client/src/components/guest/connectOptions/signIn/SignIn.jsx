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
          type="email"
          placeholder="Email"
          id={styles.input}
          value={loginEmail}
          onChange={handleInputLoginEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          id={styles.input}
          value={loginPassword}
          onChange={handleInputLoginPasswordChange}
        />
        {/* <div>Forgot Password?</div> */}
        <button className={styles.loginButton} type="submit">
          Login
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
