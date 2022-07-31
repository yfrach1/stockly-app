import React from "react";
import styles from "./NewsCard.module.css";

const NewsCard = ({ title, publishedDate, description, url, source }) => {
    return (
        <div>
            <div className={styles.newsCard}>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
                <div className={styles.footer} >
                    <a target="_blank" rel="noopener noreferrer" href={url}>{source}</a>
                    <div>{publishedDate.split("T")[0]}</div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
