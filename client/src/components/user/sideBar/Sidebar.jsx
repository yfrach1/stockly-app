import styles from "./Sidebar.module.css";
import { Navigation } from "react-minimal-side-navigation";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import downArrow from "../../../assets/images/down_arrow.svg";
import upArrow from "../../../assets/images/up_arrow.svg";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { FaDollarSign, FaBitcoin, FaSignOutAlt, FaArrowDown } from "react-icons/fa";
import logo from "../../../assets/images/newlogo.png";
import { Fragment, useState } from "react";
import { useEffect } from "react";
import { logOutUser } from "../../../app/services/userService";
function Sidebar({ firstName, lastName, portfolio }) {
   const [showStocksContent, setShowStocksContent] = useState(false);
   const [showCryptoContent, setShowCryptoContent] = useState(false);

   const history = useHistory();
   const location = useLocation();
   const handleDisplayStocksContent = () => {
      setShowStocksContent((prevShowStocksContent) => !prevShowStocksContent);
   };
   const handleDisplayCryptoContent = () => {
      setShowCryptoContent((prevShowCryptoContent) => !prevShowCryptoContent);
   };

   return (
      <div className={styles.sidebarContainer}>
         <img src={logo} alt="logo" className={styles.sidebarLogo} />
         <div className={styles.userGreeting}>
            Welcome back {firstName} {lastName}
         </div>

         <div className={styles.alignCategory} onClick={handleDisplayStocksContent}>
            <FaDollarSign /> <div className={styles.categoryText}>Stocks</div>
            <img className={styles.arrowIcon} src={showStocksContent ? upArrow : downArrow} />
         </div>
         {showStocksContent ? (
            <Fragment>
               <div style={{ marginLeft: "50px" }}>
                  <NavLink id={styles.option} to={"/stocks/myportfolio"}>
                     {portfolio.name}
                  </NavLink>
                  <div id={styles.option}>add protfolio</div>
               </div>
            </Fragment>
         ) : null}

         <div className={styles.alignCategory} onClick={handleDisplayCryptoContent}>
            <FaBitcoin /> <div className={styles.categoryText}>Crypto</div>
            <img className={styles.arrowIcon} src={showCryptoContent ? upArrow : downArrow} />
         </div>

         <div className={styles.alignSignOut}>
            <FaSignOutAlt />{" "}
            <button
               onClick={() => {
                  logOutUser();
               }}
               className={styles.categoryText}
            >
               Sign Out
            </button>
         </div>
      </div>
   );
}

//   return (
//     <div className={styles.sidebarContainer}>
//       <img src={logo} alt="logo" className={styles["sidebar-logo"]} />
//       <p className={styles["user-greeting"]}>Welcome back username</p>
//       <Navigation
//         activeItemId={location.pathname}
//         onSelect={({ itemId }) => {
//           history.push(itemId);
//         }}
//         items={[
//           {
//             title: "Stocks",
//             itemId: "/stocks",
//             elemBefore: () => <FaDollarSign />,
//             subNav: [
//               {
//                 title: "My Portfolio",
//                 itemId: "/stocks/myportfolio",
//               },
//             ],
//           },
//           {
//             title: "Crypto",
//             itemId: "/crypto",
//             elemBefore: () => <FaBitcoin />,
//           },
//           {
//             title: "Sign Out",
//             itemId: "/signout",
//             elemBefore: () => <FaSignOutAlt />,
//           },
//         ]}
//       />
//     </div>
//   );
// }

export default Sidebar;
