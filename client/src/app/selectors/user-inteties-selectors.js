const getUserEntities = (state) => state.userEntities;

export const getUserAuth = (state) => getUserEntities(state).showSignUp;
