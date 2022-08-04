import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getStocksAmount,
  getMyStocksAmount,
} from "../app/selectors/user-entities-selectors";
import DetailsSwitch from "./DetailsSwitch";

const mapStateToProps = (state, ownProps) => {
  const allStocksAmount = getStocksAmount(state);
  const myStocksAmount = getMyStocksAmount(state);
  return { allStocksAmount, myStocksAmount };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsSwitch);
