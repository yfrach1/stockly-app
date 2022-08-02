import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { getDiffPercent, getRevenu } from "../../../app/selectors/user-view-selectors";
import { getPortfolioId } from "../../../../app/selectors/user-entities-selectors";
import { setPortfolioData } from "../../../../app/actions/user-entities-actions";
import PortfolioDetails from "./PortfolioDetails";

const mapStateToProps = (state, ownProps) => {
   //  const revenu = getRevenu(state);
   //  const diffPercent = getDiffPercent(state);
   //  const stockInfo = getStockDetails(state);
   const portfolioId = getPortfolioId(state);

   return { portfolioId };
};

const mapDispatchToProps = (dispatch, ownProps) => {
   return bindActionCreators({ setPortfolioData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioDetails);
