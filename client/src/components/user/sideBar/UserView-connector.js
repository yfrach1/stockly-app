import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getFirstName,
  getLastName,
  getPortfolio,
} from "../../../app/selectors/user-entities-selectors";

import UserView from "./UserView";

const mapStateToProps = (state, ownProps) => {
  const firstName = getFirstName(state);
  console.log("firstName: ", firstName);
  const lastName = getLastName(state);
  const portfolio = getPortfolio(state);
  return { firstName, lastName, portfolio };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserView);
