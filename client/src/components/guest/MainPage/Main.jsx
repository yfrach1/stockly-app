import { useState } from "react";
import styles from "./Main.module.css";
import UserClient from "../../../app/services/userService.js";
import NavigationBar from "../navigationBar/NavigationBar";
import mainView from "../../../app/constant/MainView";

function HomePage() {
  const userClient = new UserClient();
  const [componentToView, setComponentToView] = useState(mainView.HOME);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputLoginEmailChange = (e) => setLoginEmail(e.target.value);
  const handleInputLoginPasswordChange = (e) =>
    setLoginPassword(e.target.value);
  const handleInputNameChange = (e) => setName(e.target.value);
  const handleInputLastNameChange = (e) => setLastName(e.target.value);
  const handleInputEmailChange = (e) => setEmail(e.target.value);
  const handleInputPasswordChange = (e) => setPassword(e.target.value);

  const handleLoginClick = () => {};
  const handleSingupClick = () => {
    userClient.constructor.postUser(name, lastName, email, password);
  };
  let view = {};

  return (
    <div className={styles.homePageBackground}>
      <NavigationBar setComponentToView={setComponentToView} />
      <div className={styles.contentPosition}>{componentToView}</div>
    </div>
  );
}

export default HomePage;
