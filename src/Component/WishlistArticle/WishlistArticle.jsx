import React from 'react';
import styles from './WishlistArticle.module.css';
import profilecoursefirst from "../../assets/profilecoursefirst.png";


function WishlistArticle() {
  return (
    <div className={styles.articleSection}>
      <h2 className={styles.heading}>Articles</h2>
      <div className={styles.articlesContainer}>
        <div className={styles.articleCard}>
        <img src={profilecoursefirst} alt="Course" className={styles.articleImage} />

          <div className={styles.articleContent}>
            <p>مهمتنا توفير محتوى تعليمي عالي الجودة</p>
            <a href="#" className={styles.readMore}>
              Continue reading →
            </a>
          </div>
        </div>

        <div className={styles.articleCard}>
        <img src={profilecoursefirst} alt="Course" className={styles.articleImage} />

          <div className={styles.articleContent}>
            <p>مهمتنا توفير محتوى تعليمي عالي الجودة</p>
            <a href="#" className={styles.readMore}>
              Continue reading →
            </a>
          </div>
        </div>

        <div className={styles.articleCard}>
        <img src={profilecoursefirst} alt="Course" className={styles.articleImage} />

          <div className={styles.articleContent}>
            <p>مهمتنا توفير محتوى تعليمي عالي الجودة</p>
            <a href="#" className={styles.readMore}>
              Continue reading →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistArticle;
