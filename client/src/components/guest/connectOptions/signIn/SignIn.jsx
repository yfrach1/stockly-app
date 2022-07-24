import { useState } from "react";
import styles from "./SignIn.module.css";
const SignIn = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleInputLoginEmailChange = (e) => setLoginEmail(e.target.value);
  const handleInputLoginPasswordChange = (e) =>
    setLoginPassword(e.target.value);
  return (
    <div>
      {/* need to connect this to DB */}
      <form onSubmit={() => console.log("check email and password on DB")}>
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

export default SignIn;
