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

  test("return stocks after singIn successed", () => {
    const prevState = { ...initialState };
    const userData = {
      stocks: [
        {
          change_percent: 4.58,
          isMine: true,
          name: 'Applovin Corp - Class A',
          portfolio_id: 2,
          price: 35.82,
          ticker: 'APP'
        },
      ]
    };
    const action = { type: "SIGN_IN_REQUEST_SUCCESSED", userData };
    const newState = userEntitiesReducer(prevState, action);
    expect(newState.stocks).toEqual({ "APP": { "change_percent": 4.58, "isMine": true, "name": "Applovin Corp - Class A", "portfolio_id": 2, "price": 35.82, "ticker": "APP" } });
    expect(newState.stock).toEqual({ "change_percent": 4.58, "isMine": true, "name": "Applovin Corp - Class A", "portfolio_id": 2, "price": 35.82, "ticker": "APP" });
  });

  test("return stocks after user token successed", () => {
    const prevState = { ...initialState };
    const userData = {
      stocks: [
        {
          change_percent: 4.58,
          isMine: true,
          name: 'Applovin Corp - Class A',
          portfolio_id: 2,
          price: 35.82,
          ticker: 'APP'
        },
        {
          change_percent: 4.58,
          isMine: true,
          name: 'Pineapple Energy',
          portfolio_id: 3,
          price: 35.82,
          ticker: 'PEGY'
        },
      ]
    };
    const action = { type: "CHECK_USER_TOKEN_REQUEST_SUCCESSED", userData };
    const newState = userEntitiesReducer(prevState, action);
    expect(newState.stocks).toEqual({ "APP": { "change_percent": 4.58, "isMine": true, "name": "Applovin Corp - Class A", "portfolio_id": 2, "price": 35.82, "ticker": "APP" }, "PEGY": { "change_percent": 4.58, "isMine": true, "name": "Pineapple Energy", "portfolio_id": 3, "price": 35.82, "ticker": "PEGY" } });
    expect(newState.stock).toEqual({ "change_percent": 4.58, "isMine": true, "name": "Applovin Corp - Class A", "portfolio_id": 2, "price": 35.82, "ticker": "APP" });
  });

  test("return stocks after add stock", () => {
    const userData = {
      stocks: [
        {
          change_percent: 4.58,
          isMine: true,
          name: 'Applovin Corp - Class A',
          portfolio_id: 2,
          price: 35.82,
          ticker: 'APP'
        },
      ]
    };
    const newStock = {
      "change_percent": 4.58,
      "isMine": true,
      "name": "Pineapple Energy",
      "portfolio_id": 3,
      "price": 35.82,
      "ticker": "PEGY",
    }
    const action = { type: "ADD_STOCK_REQUEST_SUCCESSED", newStock, stockTicker: 1 };
    const newState = userEntitiesReducer(userData, action);
    expect(newState.stocks).toEqual({ "0": { "change_percent": 4.58, "isMine": true, "name": "Applovin Corp - Class A", "portfolio_id": 2, "price": 35.82, "ticker": "APP" }, "1": { "change_percent": 4.58, "isMine": true, "name": "Pineapple Energy", "portfolio_id": 3, "price": 35.82, "ticker": "PEGY" } });
  });

  test("return stocks after delete stock", () => {
    const userData = {
      stocks: [
        {
          change_percent: 4.58,
          isMine: true,
          name: 'Applovin Corp - Class A',
          portfolio_id: 2,
          price: 35.82,
          ticker: 'APP'
        },
        {
          change_percent: 4.58,
          isMine: true,
          name: 'Pineapple Energy',
          portfolio_id: 3,
          price: 35.82,
          ticker: 'PEGY'
        },
      ]
    };
    const action = { type: "DELETE_STOCK_REQUEST_SUCCESSED", stockTicker: 0 };
    const newState = userEntitiesReducer(userData, action);
    expect(newState.stocks).toEqual({ "1": { "change_percent": 4.58, "isMine": true, "name": "Pineapple Energy", "portfolio_id": 3, "price": 35.82, "ticker": "PEGY" } });
  });

  test("return stocks after search", () => {
    const prevState = { ...initialState };
    const stocks = [
      {
        change_percent: 4.58,
        isMine: true,
        name: 'Applovin Corp - Class A',
        portfolio_id: 2,
        price: 35.82,
        ticker: 'APP'
      }
    ]
    const action = { type: "SEARCH_STOCK_REQUEST_SUCCESSED", stocks };
    const newState = userEntitiesReducer(prevState, action);
    expect(newState.stocks).toEqual({ "APP": { "change_percent": 4.58, "isMine": true, "name": "Applovin Corp - Class A", "portfolio_id": 2, "price": 35.82, "ticker": "APP" } });
  });

  test("return new state with new null value after sign Out", () => {
    const prevState = { ...initialState };
    const action = { type: "SIGN_OUT_REQUEST_SUCCESSED" };
    const newState = userEntitiesReducer(prevState, action);
    expect(newState.lastName).toEqual("");
    expect(newState.firstName).toEqual("");
    expect(newState.portfolio).toEqual({});
    expect(newState.stocks).toEqual({});
  });

  test("return stock details", () => {
    const userData = {
      stockDetails: {
        stockDiffPercent: {
          "1M": "4.82",
          "1W": "-5.97",
          "1Y": "23.48",
          "3M": "-24.60",
          "3Y": "140.57",
          "5Y": "29.01",
          "6M": "-23.73",
          "All": "112.67"
        },
        stockRevenue: {
          "1M": "4.82",
          "1W": "-5.97",
          "1Y": "23.48",
          "3M": "-24.60",
          "3Y": "140.57",
          "5Y": "29.01",
          "6M": "-23.73",
          "All": "112.67"
        }
      },
      stocks: [{
        change_percent: "-0.12",
        isMine: false,
        name: "Apple Inc",
        price: 165.81,
        ticker: 'AAPL'
      },]
    }
    const stockInfo = {
      "0": {
        adjClose: 0.213576812,
        adjHigh: 0.2244159497,
        adjLow: 0.2132714842,
        adjOpen: 0.2215153354,
        adjVolume: 204025004,
        close: 13.99,
        date: "2002-08-05T00:00:00.000Z",
        divCash: 0,
        high: 14.7,
        low: 13.97,
        open: 14.51,
        splitFactor: 1,
        volume: 3643300,
      }
    }
    const action = { type: "GET_STOCK_DETAILS_REQUEST_SUCCESSED", stockInfo, ticker: "AAPL" };
    const newState = userEntitiesReducer(userData, action);
    expect(newState.stockDetails.stockInfo).toEqual({"0": {adjClose: 0.213576812,adjHigh: 0.2244159497,adjLow: 0.2132714842,adjOpen: 0.2215153354,adjVolume: 204025004,close: 13.99,date: "2002-08-05T00:00:00.000Z",divCash: 0,high: 14.7,low: 13.97,open: 14.51,splitFactor: 1,volume: 3643300,}});
    expect(newState.stockDetails.stockDiffPercent).toEqual({"1M": "4.82","1W": "-5.97","1Y": "23.48","3M": "-24.60","3Y": "140.57","5Y": "29.01","6M": "-23.73","All": "112.67",});
    expect(newState.stockDetails.stockRevenue).toEqual({"1M": "4.82","1W": "-5.97","1Y": "23.48","3M": "-24.60","3Y": "140.57","5Y": "29.01","6M": "-23.73","All": "112.67",});
    expect(newState.stocks).toEqual([{ "change_percent": "-0.12", "isMine": false, "name": "Apple Inc", "price": 165.81, "ticker": "AAPL" }]);
  });

  test("return stocks after update quantity", () => {
    const userData = {
      stocks: [{
        change_percent: "-0.12",
        isMine: false,
        name: "Apple Inc",
        price: 165.81,
        ticker: 'AAPL',
        quantity: 1},]
    }

    const action = { type: "UPDATE_STOCK_REQUEST_SUCCESSED", quantity: "10", ticker: "0" };
    const newState = userEntitiesReducer(userData, action);
    expect(newState.stocks).toEqual({ "0": { "change_percent": "-0.12", "isMine": false, "name": "Apple Inc", "price": 165.81, "quantity": "10", "ticker": "AAPL" } });
    expect(newState.stock).toEqual({ "change_percent": "-0.12", "isMine": false, "name": "Apple Inc", "price": 165.81, "quantity": "10", "ticker": "AAPL" });
  });

  test("return news stock ", () => {
    const prevState = { ...initialState };
    const data = {
      crawlDate: "2022-08-03T17:51:36.229917Z",
      description: "A whale with a lot of money to spend has taken a noticeably bearish stance on Alcoa. Looking at options history for Alcoa (NYSE:AA) we detected 14 strange trades.",
      source: "benzinga.com",
      title: "Looking At Alcoa's Recent Whale Trades",
      url: "https://www.benzinga.com/markets/options/22/08/28337674/looking-at-alcoas-recent-whale-trades",
    }
    const payload = { stockNews: { 'data': data } };
    const action = { type: "GET_STOCK_NEWS_REQUEST_SUCCESSED", payload };
    const newState = userEntitiesReducer(prevState, action);
    expect(newState.stockNews.crawlDate).toEqual("2022-08-03T17:51:36.229917Z");
    expect(newState.stockNews.description).toEqual("A whale with a lot of money to spend has taken a noticeably bearish stance on Alcoa. Looking at options history for Alcoa (NYSE:AA) we detected 14 strange trades.");
    expect(newState.stockNews.source).toEqual("benzinga.com");
    expect(newState.stockNews.title).toEqual("Looking At Alcoa's Recent Whale Trades");
    expect(newState.stockNews.url).toEqual("https://www.benzinga.com/markets/options/22/08/28337674/looking-at-alcoas-recent-whale-trades");
  });
  
});
