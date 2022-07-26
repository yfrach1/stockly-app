import React from "react";
import styles from "./PortfolioGraph.module.css";
import { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { useCallback } from "react";

const PortfolioGraph = ({ portfolioInfo, setDateFilterAction }) => {
  const [xValues, setXValues] = useState([]);
  const [yValues, setYValues] = useState([]);

  const buttonHandle = useCallback(
    (graphDays) => {
      if (portfolioInfo.portfolioInfo.length) {
        let stockChartxValues = [];
        let stockChartyValues = [];
        portfolioInfo.portfolioInfo.slice(-graphDays).forEach((point) => {
          stockChartxValues.push(point.date);
          stockChartyValues.push(point.close);
        });

        setXValues(stockChartxValues);
        setYValues(stockChartyValues);
      }
    },
    [portfolioInfo]
  );

  useEffect(() => {
    buttonHandle(0);
  }, [portfolioInfo, buttonHandle]);

  const buttonsData = [
    { text: "1W", daysToShow: 5 },
    { text: "1M", daysToShow: 21 },
    { text: "3M", daysToShow: 21 * 3 },
    { text: "6M", daysToShow: 21 * 6 },
    { text: "1Y", daysToShow: 252 },
    { text: "3Y", daysToShow: 252 * 3 },
    { text: "5Y", daysToShow: 252 * 5 },
    { text: "All", daysToShow: 0 },
  ];

  return (
    <div className={styles.graphContainer}>
      {buttonsData.map((button, index) => (
        <button
          onClick={() => {
            buttonHandle(button.daysToShow);
            setDateFilterAction(button.text);
          }}
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
            line: { color: "rgba(255,130, 20, 1)" },
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

export default PortfolioGraph;
