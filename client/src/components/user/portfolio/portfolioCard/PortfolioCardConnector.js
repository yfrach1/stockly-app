import { connect } from "react-redux";
import {
  getPortfolioId,
  getPortfolioDetails,
} from "../../../../app/selectors/user-entities-selectors";
import PortfolioCard from "./PortfolioCard";

const mapStateToProps = (state, ownProps) => {
  const portfolioId = getPortfolioId(state);
  const portfolioDetails = getPortfolioDetails(state);
  return {
    portfolioId,
    portfolioDetails,
  };
};

export default connect(mapStateToProps, null)(PortfolioCard);
