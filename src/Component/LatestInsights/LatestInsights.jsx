import React from "react";
import styles from "./LatestInsights.module.css";
import { insights } from "../../assets/assests.js";

const LatestInsights = () => {
  return (
    <section className={styles.insightsSection}>
      <h2 className={styles.heading}>Latest Insights from Maflam</h2>
      <div className={styles.insightsContainer}>
        {insights.map((insight) => (
          <div key={insight.id} className={styles.insightCard}>
            <img
              src={insight.imageUrl}
              alt={insight.title}
              className={styles.insightImage}
            />
            <div className={styles.cardContent}>
              <span className={styles.category}>{insight.category}</span>
              <p className={styles.title}>{insight.title}</p>
              <a href="/blogDetails" className={styles.readMore}>
                ← Continue reading
              </a>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.loadMoreBtn}>Load more (58)</button>
    </section>
  );
};

export default LatestInsights;
