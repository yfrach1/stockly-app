import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  setHideConnectOptionsAction,
  setShowSignUpAction,
} from "../../../app/actions/guest-view-actions";
import NavigationBar from "./NavigationBar";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    { setHideConnectOptionsAction, setShowSignUpAction },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
