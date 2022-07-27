import styles from "./Sidebar.module.css";
import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { FaDollarSign, FaBitcoin, FaSignOutAlt } from "react-icons/fa";
import logo from "../../../assets/images/stockly logo.png";

function Sidebar() {
  const history = useHistory();
  const location = useLocation();

  return (
    <div className={styles.sidebarContainer}>
      <img src={logo} alt="logo" className={styles["sidebar-logo"]} />
      <p className={styles["user-greeting"]}>Welcome back username</p>
      <Navigation
        activeItemId={location.pathname}
        onSelect={({ itemId }) => {
          history.push(itemId);
        }}
        items={[
          {
            title: "Stocks",
            itemId: "/stocks",
            elemBefore: () => <FaDollarSign />,
            subNav: [
              {
                title: "My Portfolio",
                itemId: "/stocks/myportfolio",
              },
            ],
          },
          {
            title: "Crypto",
            itemId: "/crypto",
            elemBefore: () => <FaBitcoin />,
          },
          {
            title: "Sign Out",
            itemId: "/signout",
            elemBefore: () => <FaSignOutAlt />,
          },
        ]}
      />
    </div>
  );
}

export default Sidebar;
