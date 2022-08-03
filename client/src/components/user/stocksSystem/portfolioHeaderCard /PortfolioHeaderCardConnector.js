import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStock } from "../../../../app/selectors/user-entities-selectors";
import {
  getRevenue,
  getDiffPercent,
} from "../../../../app/selectors/user-view-selectors";
import { setDateFilterAction } from "../../../../app/actions/user-view-actions";
import PortfolioHeaderCard from "./PortfolioHeaderCard";

const mapStateToProps = (state, ownProps) => {
  const stock = getStock(state);
  const price = getRevenue(state);
  const percent = getDiffPercent(state);
  return { stock, price, percent };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ setDateFilterAction }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioHeaderCard);
