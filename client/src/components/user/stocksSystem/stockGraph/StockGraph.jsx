import React from "react";
import styles from "./StockGraph.module.css";
import { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { getStockData } from "../../../../app/services/mockMethods";

const StockGraph = () => {
   const [xValues, setXValues] = useState([]);
   const [yValues, setYValues] = useState([]);

   const stockSymbol = "AMZN";

   useEffect(() => {
      // here need action to fetch stock data!

      getStockData(stockSymbol).then((stockData) => {
         console.log(stockData);

         let stockChartxValues = [];
         let stockChartyValues = [];

         for (let key in stockData.intraday["Time Series (1min)"]) {
            stockChartxValues.push(key);
            stockChartyValues.push(stockData.intraday["Time Series (1min)"][key]["1. open"]);
         }

         setXValues(stockChartxValues);
         setYValues(stockChartyValues);
      });
   }, []);

   return (
      <div className={styles.graphContainer}>
         <Plot
            data={[
               {
                  x: xValues,
                  y: yValues,
                  type: "scatter",
                  mode: "lines+markers",
                  marker: { color: "red" },
                  opacity: 0.7,
               },
            ]}
            layout={{ width: 480, height: 300 }}
         />
      </div>
   );
};

export default StockGraph;
