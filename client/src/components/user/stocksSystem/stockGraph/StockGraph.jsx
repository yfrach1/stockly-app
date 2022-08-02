import React from "react";
import styles from "./StockGraph.module.css";
import { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { useCallback } from "react";

const StockGraph = ({ stockInfo, setDateFilterAction }) => {
   const [xValues, setXValues] = useState([]);
   const [yValues, setYValues] = useState([]);

   useEffect(() => {
      buttonHandle(0);
   }, [stockInfo]);

   const buttonHandle = useCallback((graphDays) => {
      if (stockInfo.length) {
         let stockChartxValues = [];
         let stockChartyValues = [];
         stockInfo.slice(-graphDays).forEach((point) => {
            stockChartxValues.push(point.date);
            stockChartyValues.push(point.close);
         });

         setXValues(stockChartxValues);
         setYValues(stockChartyValues);
      }
   });

   const buttonsData = [
      { text: "1W", daysToShow: 7 },
      { text: "1M", daysToShow: 30 },
      { text: "3M", daysToShow: 90 },
      { text: "6M", daysToShow: 180 },
      { text: "1Y", daysToShow: 365 },
      { text: "3Y", daysToShow: 365 * 3 },
      { text: "5Y", daysToShow: 365 * 5 },
      { text: "All", daysToShow: 0 },
   ];

   return (
      <div className={styles.graphContainer}>
         {buttonsData.map((button, index) => (
            <button
               onClick={
                  () => {
                     buttonHandle(button.daysToShow);
                     // setDateFilterAction(button.text);
                  }
                  // calc difference action, calc revenu
               }
               className={styles.button}
               key={index}
            >
               {button.text}
            </button>
         ))}
         <Plot
            data={[
               {
                  x: xValues,
                  y: yValues,
                  type: "scatter",
                  mode: "lines",
                  marker: { color: "red" },
                  opacity: 0.7,
                  line: { color: "#17BECF" },
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
               autosize: true,
               paper_bgcolor: "rgba(255, 255, 255, 255)",
               plot_bgcolor: "rgba(255, 255, 255, 255)",
               margin: { b: 45, l: 45, r: 5, t: 30 },
            }}
            useResizeHandler={true}
            style={{ width: "100%", height: "100%" }}
            displayModeBar={false}
            className={styles.graph}
         />
      </div>
   );
};

export default StockGraph;
