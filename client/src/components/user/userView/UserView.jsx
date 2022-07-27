import { Fragment } from "react";
import Routes from "../../../navigation/userRoutes";
import Sidebar from "../sideBar/Sidebar";

const UserView = ({ firstName, lastName, portfolio }) => {
  return (
    <Fragment>
      <Sidebar />
      <Routes />
    </Fragment>
  );
};

export default UserView;
