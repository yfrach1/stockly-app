import { connect } from "react-redux";
import { getStock } from "../../../../app/selectors/user-entities-selectors";
import {
  getRevenue,
  getDiffPercent,
} from "../../../../app/selectors/user-view-selectors";
import PortfolioHeaderCard from "./PortfolioHeaderCard";

const mapStateToProps = (state, ownProps) => {
  const stock = getStock(state);
  const price = getRevenue(state);
  const percent = getDiffPercent(state);
  return { stock, price, percent };
};

export default connect(mapStateToProps, null)(PortfolioHeaderCard);
