import { render, screen } from "@testing-library/react";
import ListStocks from "../ListStocks";
import { Provider } from "react-redux";
import { store } from "../../../../../app/store";
import { BrowserRouter } from "react-router-dom";

const stocks = [
  {
    change_percent: 4.58,
    isMine: true,
    name: "Applovin Corp - Class A",
    portfolio_id: 2,
    price: 35.82,
    quantity: 10,
    stock_id: 6,
    ticker: "APP",
  },
  {
    change_percent: "2.64",
    isMine: false,
    name: "AppHarvest Inc - Warrants (30/06/2027)",
    price: 0.58,
    ticker: "APPHW",
  },
];

describe("ListContainer", () => {
  test("should render both items (one isMine and one not)", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ListStocks stocks={stocks} />
        </Provider>
      </BrowserRouter>
    );

    // TODO: test that both items are rendered at the list
  });
});
