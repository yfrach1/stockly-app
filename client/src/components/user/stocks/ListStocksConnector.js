import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStocks } from "../../../app/selectors/user-entities-selectors";

import ListStocks from "./ListStocks";

const mapStateToProps = (state, ownProps) => {
  const stocks = getStocks(state);
  return { stocks };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ListStocks);
