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
         />
      </div>
   );
};

export default StockGraph;
