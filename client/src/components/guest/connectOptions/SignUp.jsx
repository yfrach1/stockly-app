import { useState } from "react";
import styles from "./SignUp.module.css";
const SignUp = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputFirstNameChange = (e) => setfirstName(e.target.value);
  const handleInputLastNameChange = (e) => setLastName(e.target.value);
  const handleInputEmailChange = (e) => setEmail(e.target.value);
  const handleInputPasswordChange = (e) => setPassword(e.target.value);
  {
    /* need to connect this to DB */
  }
  return (
    <form
      className={styles.formContainer}
      onSubmit={(e) => {
        e.preventDefault();
        console.log("check email and password on DB");
      }}
    >
      <div className={styles.displayNameInput}>
        <input
          type="text"
          id={styles.input}
          placeholder="First Name"
          value={firstName}
          onChange={handleInputFirstNameChange}
        />
        <input
          type="text"
          id={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChange={handleInputLastNameChange}
        />
      </div>

      <input
        type="email"
        style={{ width: "99%" }}
        id={styles.input}
        placeholder="Email"
        value={email}
        onChange={handleInputEmailChange}
      />

      <input
        type="password"
        style={{ width: "99%" }}
        id={styles.input}
        placeholder="Password"
        value={password}
        onChange={handleInputPasswordChange}
      />
      <button className={styles.SignUpButton} type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
