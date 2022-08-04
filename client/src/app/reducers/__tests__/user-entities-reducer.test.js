import { render, screen } from "@testing-library/react";
import userEntitiesReducer from "../user-entities-reducer";

const initialState = {
  userAuth: false,
  firstName: "",
  lastName: "",
  portfolio: {},
  stocks: {},
  stock: {},
  stockDetails: { stockInfo: [], stockRevenue: null, stockDiffPercent: null },
  stockNews: [],
};

describe("user Entities Reducer ", () => {
  const prevState = { ...initialState };
  test("return prev state when no match case for a given action", () => {
    const action = { type: "ADD_USER" };
    const newState = userEntitiesReducer(prevState, action);
    expect(newState).toEqual(prevState);
  });

  test("return new state with new value : lastName,firstName,portfolio", () => {
    const prevState = { ...initialState };
    const userData = {
      lastName: "EL",
      firstName: "AL",
      portfolio: { name: "my portfolio", id: 99 },
    };
    const action = { type: "SIGN_UP_REQUEST_SUCCESSED", userData };
    const newState = userEntitiesReducer(prevState, action);
    expect(newState.lastName).toEqual("EL");
    expect(newState.firstName).toEqual("AL");
    expect(newState.portfolio.name).toEqual("my portfolio");
    expect(newState.portfolio.id).toEqual(99);
  });
});
