import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addStockAction } from "../../../app/actions/user-entities-actions";

import Portfolio from "./Portfolio";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ addStockAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
