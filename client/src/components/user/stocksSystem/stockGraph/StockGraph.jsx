import React from "react";
import styles from "./StockGraph.module.css";
import { useEffect, useState } from "react";
import Plot from "react-plotly.js";

const StockGraph = ({ stockInfo }) => {
   const [xValues, setXValues] = useState([]);
   const [yValues, setYValues] = useState([]);

   useEffect(() => {
      if (stockInfo.data) {
         let stockChartxValues = [];
         let stockChartyValues = [];
         stockInfo.data.forEach((point) => {
            stockChartxValues.push(point.date);
            stockChartyValues.push(point.close);
         });

         setXValues(stockChartxValues);
         setYValues(stockChartyValues);
      }
   }, [stockInfo]);

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
               paper_bgcolor: "rgba(237, 237, 237, 255)",
               plot_bgcolor: "rgba(237, 237, 237, 255)",
               margin: { b: 45, l: 45, r: 5, t: 30 },
            }}
            displayModeBar={false}
         />
      </div>
   );
};

export default StockGraph;
