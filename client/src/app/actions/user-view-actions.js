import actionsTypes from "./constants";

const setSearchKey = (searchKey) => ({
  type: actionsTypes.SET_SEARCH_KEY,
  searchKey,
});

export const setSearchKeyAction = (searchKey) => {
  return async (dispatch) => {
    console.log(searchKey);
    dispatch(setSearchKey(searchKey));
  };
};
