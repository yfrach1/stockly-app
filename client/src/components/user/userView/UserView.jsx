import UserSwitch from "../../../navigation/UserSwitch";
import Sidebar from "../sideBar/Sidebar";
import SideBarConnector from "../sideBar/SideBar-connector";
import styles from "./UserView.module.css";
const UserView = () => {
  return (
    <div className={styles.mainPage}>
      <SideBarConnector />
      <div className={styles.userPreview}>
        <UserSwitch />
      </div>
    </div>
  );
};

export default UserView;
