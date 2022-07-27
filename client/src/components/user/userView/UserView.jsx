import UserSwitch from "../../../navigation/UserSwitch";
import Sidebar from "../sideBar/Sidebar";
import styles from "./UserView.module.css";
const UserView = () => {
  return (
    <div className={styles.mainPage}>
      <Sidebar />
      <div className={styles.userPreview}>
        <UserSwitch />
      </div>
    </div>
  );
};

export default UserView;
