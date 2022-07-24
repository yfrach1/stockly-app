import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  setShowSignInAction,
  setShowSignUpAction,
} from "../../../app/actions/guest-view-actions";
import {
  getShowSignIn,
  getShowSignUp,
} from "../../../app/selectors/guest-view-selectors";
import ConnectOptionDisplay from "./ConnectOptionDisplay";

const mapStateToProps = (state, ownProps) => {
  const showSignIn = getShowSignIn(state);
  const showSignUp = getShowSignUp(state);
  return { showSignIn, showSignUp };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    { setShowSignInAction, setShowSignUpAction },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectOptionDisplay);
