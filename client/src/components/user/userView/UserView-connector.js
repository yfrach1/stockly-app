import { connect } from "react-redux";
import { getPortfolioId } from "../../../app/selectors/user-entities-selectors";

import UserView from "./UserView";

const mapStateToProps = (state, ownProps) => {
  const portfolioId = getPortfolioId(state);
  return { portfolioId };
};

export default connect(mapStateToProps, null)(UserView);
