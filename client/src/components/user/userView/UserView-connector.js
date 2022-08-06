import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPortfolioId } from "../../../app/selectors/user-entities-selectors";

import UserView from "./UserView";

const mapStateToProps = (state, ownProps) => {
  const portfolioId = getPortfolioId(state);
  return { portfolioId };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserView);
