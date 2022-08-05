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

  test("return new state  with redirectLoading set to true", () => {
    const prevState = { ...initialState };
    const action = { type: "CHECK_USER_TOKEN_REQUEST" };
    const newState = userViewReducer(prevState, action);
    expect(newState.redirectLoading).toEqual(true);
  });

  test("return new state successed with redirectLoading set to false", () => {
    const prevState = { ...initialState };
    const action = { type: "CHECK_USER_TOKEN_REQUESTT_SUCCESSED" };
    const newState = userViewReducer(prevState, action);
    expect(newState.redirectLoading).toEqual(false);
  });

  test("return new state failed with redirectLoading set to false", () => {
    const prevState = { ...initialState };
    const action = { type: "CHECK_USER_TOKEN_REQUESTT_CHECK_USER_TOKEN_REQUEST_FAILED" };
    const newState = userViewReducer(prevState, action);
    expect(newState.redirectLoading).toEqual(false);
  });

  test("return singIn with redirectLoading set to true", () => {
    const prevState = { ...initialState };
    const action = { type: "SIGN_IN_REQUEST" };
    const newState = userViewReducer(prevState, action);
    expect(newState.redirectLoading).toEqual(true);
  });

  test("return singUp with redirectLoading set to true", () => {
    const prevState = { ...initialState };
    const action = { type: "SIGN_UP_REQUEST" };
    const newState = userViewReducer(prevState, action);
    expect(newState.redirectLoading).toEqual(true);
  });

  test("return search with fetchLoading set to true", () => {
    const prevState = { ...initialState };
    const action = { type: "SEARCH_STOCK_REQUEST" };
    const newState = userViewReducer(prevState, action);
    expect(newState.fetchLoading).toEqual(true);
  });

  test("return search successed with fetchLoading set to true", () => {
    const prevState = { ...initialState };
    const action = { type: "SEARCH_STOCK_REQUEST_SUCCESSED" };
    const newState = userViewReducer(prevState, action);
    expect(newState.fetchLoading).toEqual(false);
  });

  test("return search failed with fetchLoading set to true", () => {
    const prevState = { ...initialState };
    const action = { type: "SEARCH_STOCK_REQUEST_FAILED" };
    const newState = userViewReducer(prevState, action);
    expect(newState.fetchLoading).toEqual(false);
  });

  test("return sing up successed with redirectLoading set to true", () => {
    const prevState = { ...initialState };
    const action = { type: "SIGN_UP_REQUEST_SUCCESSED" };
    const newState = userViewReducer(prevState, action);
    expect(newState.redirectLoading).toEqual(false);
  });

  test("return sing in successed with redirectLoading set to true", () => {
    const prevState = { ...initialState };
    const action = { type: "SIGN_IN_REQUEST_SUCCESSED" };
    const newState = userViewReducer(prevState, action);
    expect(newState.redirectLoading).toEqual(false);
  });

  test("return null value after hode toast", () => {
    const prevState = { ...initialState };
    const action = { type: "HIDE_TOAST" };
    const newState = userViewReducer(prevState, action);
    expect(newState.showToast).toEqual(false);
    expect(newState.toastParam.toastType).toEqual(null);
    expect(newState.toastParam.message).toEqual(null);
    expect(newState.toastParam.autoHideDuration).toEqual(null);
  });

  test("return an error message while error sing in", () => {
    const prevState = { ...initialState };
    const action = { type: "SIGN_IN_REQUEST_FAILED" };
    const newState = userViewReducer(prevState, action);
    expect(newState.redirectLoading).toEqual(false);
    expect(newState.showToast).toEqual(true);
    expect(newState.toastParam.toastType).toEqual("NEGATIVE");
    expect(newState.toastParam.message).toEqual("Something went wrong while sign in");
    expect(newState.toastParam.autoHideDuration).toEqual(null);
  });

  test("Return portfolio id", () => {
    const prevState = { ...initialState };
    const action = { type: "SET_PORTFOLIO_ID", portfolioId: 1 };
    const newState = userViewReducer(prevState, action);
    expect(newState.portfolioId).toEqual(1);
  });

  test("return date filter", () => {
    const prevState = { ...initialState };
    const action = { type: "SET_DATE_FILTER", filter: 20220405 };
    const newState = userViewReducer(prevState, action);
    expect(newState.dateFilter).toEqual(20220405);
  });

  /*test("return an error message on error sing up ", () => {
    const prevState = { ...initialState };
    const action = { type: "SIGN_UP_REQUEST_FAILED" };
    const newState = userViewReducer(prevState, action);
    expect(newState.redirectLoading).toEqual(false);
    expect(newState.showToast).toEqual(true);
    expect(newState.toastParam.toastType).toEqual("NEGATIVE");
    expect(newState.toastParam.message).toEqual("Something went wrong while sign up");
    expect(newState.toastParam.autoHideDuration).toEqual(null);
  });*/

});
