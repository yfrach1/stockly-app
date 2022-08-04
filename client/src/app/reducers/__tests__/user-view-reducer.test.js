import { render, screen } from "@testing-library/react";
import userViewReducer from "../user-view-reducer";

const initialState = {
  redirectLoading: false,
  portfolioId: null,
  fetchLoading: false,
  showToast: false,
  dateFilter: "All",
  toastParam: { toastType: null, message: null, autoHideDuration: null },
};

describe("user view Reducer ", () => {
  const prevState = { ...initialState };
  test("return prev state when no match case for a given action", () => {
    const action = { type: "ADD_USER" };
    const newState = userViewReducer(prevState, action);
    expect(newState).toEqual(prevState);
  });

  test("return new state with redirectLoading set to true", () => {
    const prevState = { ...initialState };
    const action = { type: "CHECK_USER_TOKEN_REQUEST" };
    const newState = userViewReducer(prevState, action);
    expect(newState.redirectLoading).toEqual(true);
  });
});
