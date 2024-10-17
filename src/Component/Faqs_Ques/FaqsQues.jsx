
import React, { useState } from "react";
import styles from "./FaqsQues.module.css";
import { faqDataPage } from "../../assets/assests";

const FaqsQues = () => {
  const [openTitleIndices, setOpenTitleIndices] = useState([]); 
  const [openQuestionIndices, setOpenQuestionIndices] = useState([]); 

  const toggleTitle = (index) => {
    setOpenTitleIndices((prev) => 
      prev.includes(index) 
      ? prev.filter((i) => i !== index) 
      : [...prev, index] 
    );
  };

  const toggleQuestion = (index) => {
    setOpenQuestionIndices((prev) => 
      prev.includes(index) 
      ? prev.filter((i) => i !== index) 
      : [...prev, index] 
    );
  };

  return (
    <div className={styles.mainContainers}>
      <div className={styles.faqContainer}>
        <h1 className={styles.title}>FAQ</h1>
        {faqDataPage.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <div
              className={styles.titleContainer}
              onClick={() => toggleTitle(sectionIndex)}
            >
              <span className={styles.sectionToggleSign}>
                {openTitleIndices.includes(sectionIndex) ? "-" : "+"}
              </span>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
            </div>

            {openTitleIndices.includes(sectionIndex) &&
              section.faq.map((item, index) => (
                <div key={index} className={styles.faqItem}>
                  <div
                    className={styles.questionContainer}
                    onClick={() => toggleQuestion(index)}
                  >
                    <span className={styles.questionToggleSign}>
                      {openQuestionIndices.includes(index) ? "-" : "+"}
                    </span>
                    <h3 className={styles.question}>{item.question}</h3>
                  </div>
                  <div
                    className={styles.answer}
                    style={{
                      maxHeight: openQuestionIndices.includes(index) ? "200px" : "0px",
                    }}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqsQues;
