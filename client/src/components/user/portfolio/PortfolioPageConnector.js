import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUserStocks } from "../../../app/selectors/user-entities-selectors";

import PortfolioPage from "./PortfolioPage";

const mapStateToProps = (state, ownProps) => {
   const stocks = getUserStocks(state);
   return { stocks };
};

export default connect(mapStateToProps, null)(PortfolioPage);
