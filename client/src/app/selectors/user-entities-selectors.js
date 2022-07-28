const getUserEntities = (state) => state.userEntities;

export const getUserAuth = (state) => getUserEntities(state).userAuth;
export const getFirstName = (state) => getUserEntities(state).firstName;
export const getLastName = (state) => getUserEntities(state).lastName;
export const getPortfolio = (state) => getUserEntities(state).portfolio;
export const getPortfolioId = (state) => getUserEntities(state).portfolio.id;
export const getMyStocks = (state) => getUserEntities(state).stocks;
export const getSearchStocks = (state) => getUserEntities(state).searchStocks;
