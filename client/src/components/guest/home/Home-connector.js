import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  setShowSignInAction,
  setShowSignUpAction,
} from "../../../app/actions/guest-view-actions";
import { getShowConnectOptions } from "../../../app/selectors/guest-view-selectors";
import Home from "./Home";

const mapStateToProps = (state, ownProps) => {
  const showConnectOptions = getShowConnectOptions(state);
  return { showConnectOptions };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    { setShowSignInAction, setShowSignUpAction },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
