import { useState } from "react";
import styles from "./SignUp.module.css";
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputFirstNameChange = (e) => setFirstName(e.target.value);
  const handleInputLastNameChange = (e) => setLastName(e.target.value);
  const handleInputEmailChange = (e) => setEmail(e.target.value);
  const handleInputPasswordChange = (e) => setPassword(e.target.value);
  {
    /* need to connect this to DB */
  }
  const handleSignUp = () => {
    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };
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
          type="text"
          id={styles.input}
          placeholder="First Name"
          value={firstName}
          onChange={handleInputFirstNameChange}
          required
        />
        <input
          type="text"
          id={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChange={handleInputLastNameChange}
          required
        />
      </div>

      <input
        type="email"
        style={{ width: "99%" }}
        id={styles.input}
        placeholder="Email"
        value={email}
        onChange={handleInputEmailChange}
        required
      />

      <input
        type="password"
        style={{ width: "99%" }}
        id={styles.input}
        placeholder="Password"
        value={password}
        onChange={handleInputPasswordChange}
        minLength="6"
        required
      />
      <button className={styles.SignUpButton} type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
