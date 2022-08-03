import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getFirstName,
  getLastName,
  getPortfolio,
} from "../../../app/selectors/user-entities-selectors";
import { signOutAction } from "../../../app/actions/user-entities-actions";
import { setPortfolioIdAction } from "../../../app/actions/user-view-actions";

import SideBar from "./Sidebar";

const mapStateToProps = (state, ownProps) => {
  const firstName = getFirstName(state);
  const lastName = getLastName(state);
  const portfolio = getPortfolio(state);

  return { firstName, lastName, portfolio };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ signOutAction, setPortfolioIdAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
