import React from "react";
import NewsCard from "./newsCard/NewsCard";
import styles from "./ListNews.module.css";

const ListNews = ({ stockNews }) => {
  return (
    <div className={styles.container}>
      {stockNews ? (
        <div>
          {stockNews.map((news) => (
            <NewsCard
              key={news.id}
              title={news.title}
              publishedDate={news.publishedDate}
              description={news.description}
              url={news.url}
              source={news.source}
            />
          ))}
        </div>
      ) : (
        <div>No news</div>
      )}
    </div>
  );
};
export default ListNews;
