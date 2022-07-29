import React from "react";
import styles from "./StockGraph.module.css";
import { useEffect, useState } from "react";
import Plot from "react-plotly.js";

const StockGraph = () => {
   const [xValues, setXValues] = useState([]);
   const [yValues, setYValues] = useState([]);

   useEffect(() => {
      const ticker = "AMZN";
      const getStockData = () => {}; // deleteee
      getStockData(ticker).then((stockData) => {
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
            layout={{
               modebar: {
                  remove: [
                     "pan",
                     "zoom",
                     "select",
                     "lasso",
                     "toImage",
                     "zoomin",
                     "zoomout",
                     "autoscale",
                  ],
               },
               paper_bgcolor: "rgb(166, 225, 255)",
               plot_bgcolor: "rgb(166, 225, 255)",
               margin: { b: 45, l: 45, r: 5, t: 30 },
            }}
            displayModeBar={false}
         />
      </div>
   );
};

export default StockGraph;
