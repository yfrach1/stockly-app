import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getStockDetailsAction,
  getStockNewsAction,
} from "../../../../app/actions/user-entities-actions";

import { getPortfolioId } from "../../../../app/selectors/user-entities-selectors";
import StockCard from "./StockCard";

const mapStateToProps = (state, ownProps) => {
  const portfolioId = getPortfolioId(state);
  console.log(portfolioId);
  return { portfolioId };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    { getStockDetailsAction, getStockNewsAction },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StockCard);
