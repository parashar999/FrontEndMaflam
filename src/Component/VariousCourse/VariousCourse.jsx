import React from "react";
import styles from "./VariousCourse.module.css";
import { VariousCard } from "../../assets/assests";





const VariousCourse = () => {
  return (
    <div className={styles.container}>
      <h2>Or, choose from our various courses.</h2>
      <div className={styles.cardsGrid}>
        {VariousCard.map((course) => (
          <div key={course.id} className={styles.card}>
            <img src={course.imageUrl} alt={course.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <p className={styles.instructor}>{course.instructor}</p>
              <h3 className={styles.title}>{course.title}</h3>
              <p className={styles.description}>{course.description}</p>
              <div className={styles.footer}>
                <span>{course.price}</span>
                <span>{course.duration}</span>
                <button className={styles.buyNow}>Buy now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VariousCourse;
