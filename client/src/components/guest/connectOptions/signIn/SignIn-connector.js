import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signInAction } from "../../../../app/actions/user-entities-actions";

import SignIn from "./SignIn";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ signInAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
