const { User, Portfolio, Stock } = require("../../storage/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { use } = require("bcrypt/promises");
const stockService = require("../services/stockService");
const stockClient = require("../clients/stockClient");

class UserManager {
  async createUser(newUserData) {
    if (await this._getUser(newUserData.email)) {
      return null;
    }
    const hashedPassword = await bcrypt.hash(newUserData.password, 10);
    newUserData.password = hashedPassword;
    const dbUserData = await User.create(newUserData);
    const portfolio = await Portfolio.create({
      user_id: dbUserData.user_id,
      name: "My portfolio",
    });

    const userData = {
      firstName: dbUserData.first_name,
      lastName: dbUserData.last_name,
      portfolio: {
        name: portfolio.name,
        id: portfolio.portfolio_id,
      },
    };
    const accessToken = await this._createAccessToken(dbUserData.user_id);
    return { accessToken, userData };
  }

  async loginUser(loginUserData) {
    let accessToken = null;
    let userData = null;

    const userId = await this._isUserValid(loginUserData);

    if (userId) {
      accessToken = await this._createAccessToken(userId);
      userData = await this.getUserData(userId);
    }

    return { accessToken, userData };
  }

  _compareStockLastUpdatedDay(date1, date2) {
    if (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    )
      return true;
    else return false;
  }

  async getUserData(userId) {
    const user = await User.findByPk(userId, {
      include: { model: Portfolio, include: Stock },
    });
    const { portfolio, stocks } = await this._getPortfolioData(user.Portfolios);

    const userData = {
      firstName: user.first_name,
      lastName: user.last_name,
      portfolio,
      stocks,
    };
    return userData;
  }

  _extractDataFromFetchStockResult(stockDataFromApi) {
    const close = stockDataFromApi[0].adjClose;
    const open = stockDataFromApi[0].adjOpen;
    const price = stockDataFromApi[0].adjClose;
    return { price, open, close };
  }

  async _updateStocksDataOnDb(stocks) {
    // let formatedStocks = [];
    let stockQuery = {
      ticker: "",
      startDate: "",
      endDate: "",
      resampleFreq: "",
    };

    // const tickers = stocks.map((stock) => stock.dataValues.ticker);
    const formatedStocks = await Promise.all(
      stocks.map(async (stock) => {
        let StockData = { ...stock };
        stockQuery.ticker = stock.ticker;
        const fetchResult = await stockClient.getStockDataAPI(stockQuery);
        const { price, open, close } =
          this._extractDataFromFetchStockResult(fetchResult);
        StockData.price = price;
        StockData.change_percent = ((close / open) * 100 - 100).toFixed(2);
        //update the data to be most upsated
        await stockService.updateStock(
          StockData.stock_id,
          StockData.price,
          StockData.change_percent
        );
        return StockData;
      })
    );

    // const tickers = stocks.map((stock) => stock.dataValues.ticker);
    // for (let i = 0; i < tickers.length; i++) {
    //   //get the riggth format of stocks
    //   let formatStockData = stockService._formatStocks(stocks[i]);

    //   //fetch new data
    //   stockQuery.ticker = tickers[i];
    //   const result = await stockClient.getStockData(stockQuery);
    //   const { price, open, close } =
    //     this._extractDataFromFetchStockResult(result);
    //   formatStockData.price = price;
    //   formatStockData.change_percent = ((close / open) * 100 - 100).toFixed(2);
    //   //update the data to be most upsated
    //   await stockService.updateStock(
    //     formatStockData.stock_id,
    //     formatStockData.price,
    //     formatStockData.change_percent
    //   );

    //   formatedStocks.push(formatStockData);
    // }

    return formatedStocks;
  }

  async _getPortfolioData(userPortfolio) {
    const portfolio = {
      name: userPortfolio[0].name,
      id: userPortfolio[0].portfolio_id,
    };
    let stocksFromDb = userPortfolio[0].Stocks;
    let stocks = stocksFromDb.map((stock) => stockService.formatStocks(stock));
    if (stocksFromDb.length) {
      if (
        !this._compareStockLastUpdatedDay(
          stocksFromDb[0].dataValues.updatedAt,
          new Date()
        )
      ) {
        stocks = await this._updateStocksDataOnDb(stocks);
      }
    }

    return { portfolio, stocks };
  }
  async _createAccessToken(id) {
    const userId = {
      id,
    };

    const accessToken = jwt.sign(userId, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "12h",
    });
    return accessToken;
  }

  async _getUser(email) {
    return await User.findOne({ where: { email } });
  }

  async _isUserValid({ email, password }) {
    const user = await this._getUser(email);
    if (!user) return false;
    if (!(await bcrypt.compare(password, user.password))) return false;
    return user.user_id;
  }
}

module.exports = new UserManager();
