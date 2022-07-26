import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUserAuth } from "./app/selectors/user-entities-selectors";

import App from "./App";

const mapStateToProps = (state, ownProps) => {
  const userAuth = getUserAuth(state);
  return { userAuth };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
