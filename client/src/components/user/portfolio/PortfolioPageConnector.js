import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUserStocks } from "../../../app/selectors/user-entities-selectors";
import { addStockAction } from "../../../app/actions/user-entities-actions";

import PortfolioPage from "./PortfolioPage";

const mapStateToProps = (state, ownProps) => {
   const stocks = getUserStocks(state);
   return { stocks };
};

const mapDispatchToProps = (dispatch, ownProps) => {
   return bindActionCreators({ addStockAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPage);
