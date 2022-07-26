import stocksData from "./mockdata";

export async function getStockData(stockTicker) {
   return stocksData.data[stockTicker];
}
