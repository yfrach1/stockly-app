import React from "react";
import styles from "./stockHeaderCard.module.css";

const stockHeaderCard = ({ stock }) => {
  const funds = stock.quantity * (stock.price - stock.buy_price).toFixed(2);
  const changePercent = (
    ((stock.price - stock.buy_price) / stock.buy_price) *
    100
  ).toFixed(2);

  return (
    <div className={styles.header}>
      <div className={styles.companyDetailsContainer}>
        <h1 className={styles.ticker}>{stock.ticker}</h1>
        <h2 className={styles.stockName}>{stock.name}</h2>
      </div>
      <div
        className={styles.companyRevContainer}
        // style={!stock.isMine ? { width: "100px" } : {}}
      >
        <div className={styles.headLinePosition}>
          {stock.isMine ? (
            <div className={styles.headLineText}>Your total stock profit </div>
          ) : (
            <div></div>
          )}
          <div className={styles.headLineText}>Today </div>
        </div>

        <div className={styles.pricePosition}>
          {stock.isMine ? (
            <div className={styles.buyPrice}>
              {`Buy price: $${stock.buy_price}`}
            </div>
          ) : (
            <div></div>
          )}
          <div className={styles.price}> {`Price: $${stock.price}`}</div>
        </div>

        <div className={styles.percentPosition}>
          {stock.isMine ? (
            <div className={styles.percentageTotal}>
              Profit:
              <span className={styles.stockProfit} style={{ color: "black" }}>
                ${funds.toFixed(2)}
              </span>
              <span
                style={{
                  backgroundColor: changePercent > 0 ? "#38ef7d" : "#F00000",
                }}
                className={styles.stockPercent}
              >
                {changePercent}%
              </span>
            </div>
          ) : (
            <div></div>
          )}
          <div
            className={styles.stockPercent}
            style={{
              backgroundColor: stock.change_percent > 0 ? "#38ef7d" : "#F00000",
            }}
          >
            {stock.change_percent}%
          </div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className={styles.header}>
  //     <div className={styles.companyDetailsContainer}>
  //       <h1 className={styles.ticker}>{stock.ticker}</h1>
  //       <h2 className={styles.stockName}>{stock.name}</h2>
  //     </div>
  //     <div className={styles.companyRevContainer}>
  //       {stock.isMine ? (
  //         <div className={styles.profitContainer}>
  //           <div className={styles.dateDescription}>
  //             Your total stock profit
  //           </div>
  //           <div className={styles.buyPrice}>Buy price: {stock.buy_price}</div>
  //           <div className={styles.percentageTotal}>
  //             Profit:
  //             <span
  //               style={{
  //                 backgroundColor: funds > 0 ? "#38ef7d" : "#F00000",
  //               }}
  //               className={styles.stockProfit}
  //             >
  //               ${funds}
  //             </span>
  //             <span
  //               style={{
  //                 backgroundColor: changePercent > 0 ? "#38ef7d" : "#F00000",
  //               }}
  //               className={styles.stockPercent}
  //             >
  //               {changePercent}%
  //             </span>
  //           </div>
  //         </div>
  //       ) : (
  //         <></>
  //       )}
  //       <div className={styles.todayContainer}>
  //         <div className={styles.dateDescription}>Today</div>
  //         <div className={styles.price}> {stock.price}</div>
  //         <div
  //           className={styles.percentage}
  //           style={{
  //             backgroundColor: stock.change_percent > 0 ? "#38ef7d" : "#F00000",
  //           }}
  //         >
  //           {stock.change_percent}%
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default stockHeaderCard;
