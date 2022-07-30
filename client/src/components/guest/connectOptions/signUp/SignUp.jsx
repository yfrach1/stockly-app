import { useState } from "react";
import styles from "./SignUp.module.css";
import PropTypes from "prop-types";

const SignUp = ({ signUpAction }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputFirstNameChange = (e) => setFirstName(e.target.value);
  const handleInputLastNameChange = (e) => setLastName(e.target.value);
  const handleInputEmailChange = (e) => setEmail(e.target.value);
  const handleInputPasswordChange = (e) => setPassword(e.target.value);

  const handleSignUp = () => {
    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    };
    signUpAction(newUser);
  };
  return (
    <form
      className={styles.formContainer}
      onSubmit={(e) => {
        e.preventDefault();
        handleSignUp();
      }}
    >
      <div className={styles.displayNameInput}>
        <input
          className={styles.inputTextBox}
          style={{ marginRight: "10px" }}
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleInputFirstNameChange}
          required
        />
        <input
          className={styles.inputTextBox}
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleInputLastNameChange}
          required
        />
      </div>

      <input
        className={styles.inputTextBox}
        type="email"
        style={{ width: "99%" }}
        placeholder="Email"
        value={email}
        onChange={handleInputEmailChange}
        required
      />

      <input
        className={styles.inputTextBox}
        type="password"
        style={{ width: "99%" }}
        placeholder="Password"
        value={password}
        onChange={handleInputPasswordChange}
        minLength="6"
        required
      />
      <button className={styles.signUpButton} type="submit">
        Sign Up
      </button>
    </form>
  );
};

SignUp.propTypes = {
  signUpAction: PropTypes.func,
};

SignUp.defaultProps = {
  signUpAction: () => {},
};

export default SignUp;
