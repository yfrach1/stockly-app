import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getAllStocksAmount,
  getMyStocksAmount,
  getStocksAmount,
  getStock,
} from "../app/selectors/user-entities-selectors";
import DetailsSwitch from "./DetailsSwitch";

const mapStateToProps = (state, ownProps) => {
  const allStocksAmount = getStocksAmount(state);
  const myStocksAmount = getMyStocksAmount(state);
  const stock = getStock(state);
  return { allStocksAmount, myStocksAmount, stock };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsSwitch);
