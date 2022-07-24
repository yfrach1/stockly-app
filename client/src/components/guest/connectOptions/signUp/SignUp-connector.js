import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SignUpAction } from "../../../../app/actions/user-view-actions";

import SignUp from "./SignUp";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ SignUpAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
