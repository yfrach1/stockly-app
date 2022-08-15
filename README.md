# Stockly

This project is the final one as part of the Monday-U Academy Full Stack Course.

- Stockly is a stock portfolio manager app where you can search stocks, add stocks to your portfolio, delete them or update their quantity and look at your past portfolio stats and graph.
- On each stock you can watch the latest news as well.

## Tech used:

- We used the following stack: Javascript, Node.js, React, Redux, HTML, CSS, Express.js, MySQL DB with Sequelize ORM.
- Our stocks API is https://api.tiingo.com/.
- We used 4 db tables: User, Portfolio, Stock and Stock_history.
- Our stock history tables hold all stock data and updates once a day after stock market close using node-schedule package.
- We used JWT for user authentication.
- We used bcrypt package for password decryption hashing.
- We used framer-motion package for animations.
- Other than that we developed everything ourselves.

![Screenshot](/client/src/assets/images/screenshot.png)
