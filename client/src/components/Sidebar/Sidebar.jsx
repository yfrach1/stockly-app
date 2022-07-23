import SidebarCSS from "./Sidebar.module.css";
import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { FaDollarSign, FaBitcoin, FaSignOutAlt } from "react-icons/fa";
import logo from "./stockly-logo.png";

function Sidebar() {
   const history = useHistory();
   const location = useLocation();

   return (
      <div className={SidebarCSS["sidebar-container"]}>
         <img src={logo} alt="logo" className={SidebarCSS["sidebar-logo"]} />
         <p className={SidebarCSS["user-greeting"]}>Welcome back username</p>
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
