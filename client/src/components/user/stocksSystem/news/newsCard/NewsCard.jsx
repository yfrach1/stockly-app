import React from "react";
import styles from "./NewsCard.module.css";

const NewsCard = ({ title, publishedDate, description, url, source }) => {
   return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={styles.newsCard}>
         <div className={styles.title}>{title}</div>
         <div className={styles.description}>{description}</div>
         <div className={styles.footer}>
            <div>{source}</div>
            <div>{publishedDate.split("T")[0]}</div>
         </div>
      </a>
   );
};

export default NewsCard;
