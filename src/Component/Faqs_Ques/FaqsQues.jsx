import React from "react";
import styles from "./FaqsQues.module.css";
import { faqDataPage } from "../../assets/assests"; // Assuming you're importing it from assets correctly

const FaqsQues = () => {
  return (
    <>
    <div className={styles.mainContainers}>
      <div className={styles.faqContainer}>
        <h1 className={styles.title}>FAQ</h1>
        {faqDataPage[0].faq.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <h3 className={styles.question}>{item.question}</h3>
            <p className={styles.answer}>{item.answer}</p>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default FaqsQues;
