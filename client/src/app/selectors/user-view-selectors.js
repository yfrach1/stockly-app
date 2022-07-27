const getUserView = (state) => state.userView;

export const getSearchKey = (state) => getUserView(state).searchKey;
