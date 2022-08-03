import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMyStocks } from "../app/selectors/user-entities-selectors";
import DetailsSwitch from "./DetailsSwitch";

const mapStateToProps = (state, ownProps) => {
  const myStocks = getMyStocks(state);

  return { myStocks };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsSwitch);
