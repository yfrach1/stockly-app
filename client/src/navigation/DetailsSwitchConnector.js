import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getPortfolioId,
  getStock,
} from "../app/selectors/user-entities-selectors";
import DetailsSwitch from "./DetailsSwitch";

const mapStateToProps = (state, ownProps) => {
  const stock = getStock(state);
  const portfolioId = getPortfolioId(state);
  return { portfolioId, stock };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsSwitch);
