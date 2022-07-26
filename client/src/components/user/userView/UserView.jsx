import { Fragment } from "react";

const UserView = ({ firstName, lastName, portfolio }) => {
  return (
    <Fragment>
      <div style={{ fontSize: "100" }}>first : {firstName}</div>
      {/* <div style={{ fontSize: "100" }}>my portfolio: {portfolio}</div> */}
    </Fragment>
  );
};

export default UserView;
