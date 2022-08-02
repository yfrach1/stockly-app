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
  let newStateAfterSetData;
  test("return prev state when no match case for a given action", () => {
    const action = { type: "ADD_USER" };
    const newState = userEntitiesReducer(prevState, action);
    expect(newState).toEqual(prevState);
  });

  test("return new state with 3 new items", () => {
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

  //   test("return new state without item with id:677 ", () => {
  //     const action = { type: "REMOVE_ITEM", id: 677 };
  //     const newStateAfterRemoveItem = itemsEntitiesReducer(
  //       newStateAfterSetData,
  //       action
  //     );
  //     expect(newStateAfterRemoveItem[676]).toEqual(undefined);
  //   });

  //   test("return new empty state after delete all items ", () => {
  //     const action = { type: "CLEAR_ITEMS" };
  //     const newStateAfterDeleteAll = itemsEntitiesReducer(
  //       newStateAfterSetData,
  //       action
  //     );
  //     expect(newStateAfterDeleteAll).toEqual(initialState);
  //   });

  //   test("return new state after adding new item  ", () => {
  //     const newItems = [{ id: 99999, itemName: "Go to walk" }];
  //     const action = { type: "ADD_ITEMS", newItems };

  //     const newStateAfterAddItems = itemsEntitiesReducer(
  //       newStateAfterSetData,
  //       action
  //     );
  //     expect(newStateAfterAddItems.items[99999]).toEqual({
  //       id: 99999,
  //       itemName: "Go to walk",
  //     });
  //   });

  //   test("update item field and return new state with updated data  ", () => {
  //     const itemData = { newValue: true, id: 676, field: "status" };
  //     const action = { type: "UPDATE_ITEM", itemData };

  //     const newStateAfterUpdateItem = itemsEntitiesReducer(
  //       newStateAfterSetData,
  //       action
  //     );
  //     expect(newStateAfterUpdateItem.items[676].status).toEqual(true);
  //   });
});
