import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { getDiffPercent, getRevenu } from "../../../app/selectors/user-view-selectors";
// import { getStockDetails } from "../../../app/selectors/user-entities-selectors";
import { setPortfolioData } from "../../../../app/actions/user-view-actions";
import PortfolioDetails from "./PortfolioDetails";

const mapStateToProps = (state, ownProps) => {
   //  const revenu = getRevenu(state);
   //  const diffPercent = getDiffPercent(state);
   //  const stockInfo = getStockDetails(state);

   return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
   return bindActionCreators({ setPortfolioData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioDetails);
