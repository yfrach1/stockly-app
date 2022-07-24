import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signUpAction } from "../../../../app/actions/user-entities-actions";

import SignUp from "./SignUp";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ signUpAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
