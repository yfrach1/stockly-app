import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PortfolioData from "./PortfolioData";

const mapStateToProps = (state, ownProps) => {
   return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
   return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioData);
