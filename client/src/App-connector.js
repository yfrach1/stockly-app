import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUserAuth } from "./app/selectors/user-entities-selectors";
import {
  getRedirectLoading,
  getShowToast,
  getToastParam,
} from "./app/selectors/user-view-selectors";

import { checkUserTokenAction } from "./app/actions/user-entities-actions";

import App from "./App";

const mapStateToProps = (state, ownProps) => {
  const userAuth = getUserAuth(state);
  const redirectLoading = getRedirectLoading(state);
  const showToast = getShowToast(state);
  const toastParam = getToastParam(state);
  return { userAuth, redirectLoading, showToast, toastParam };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ checkUserTokenAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
