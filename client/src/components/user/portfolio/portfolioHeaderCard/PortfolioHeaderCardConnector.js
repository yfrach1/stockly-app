import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getStock,
  getPortfolioDetails,
} from "../../../../app/selectors/user-entities-selectors";
import {
  getPortfiolioRevenue,
  getPortfolioDiffPercent,
  getDateFilter,
} from "../../../../app/selectors/user-view-selectors";
import { setDateFilterAction } from "../../../../app/actions/user-view-actions";
import PortfolioHeaderCard from "./PortfolioHeaderCard";

const mapStateToProps = (state, ownProps) => {
  const stock = getStock(state);
  const price = getPortfiolioRevenue(state);
  const percent = getPortfolioDiffPercent(state);
  const timePeriodFilter = getDateFilter(state);
  const portfolioDetails = getPortfolioDetails(state);
  return { stock, price, percent, timePeriodFilter, portfolioDetails };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ setDateFilterAction }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioHeaderCard);
