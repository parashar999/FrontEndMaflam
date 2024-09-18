import React, { useState } from 'react';
import styles from './Faqs.module.css'; // Import the CSS module
// import { faqData } from '../../assets/assets'; // Import FAQ data
import { faqData } from '../../assets/Assests';


const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h2>FAQ</h2>
      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
            onClick={() => handleToggle(index)}
          >
            <div className={styles.question}>{item.question}</div>
            {activeIndex === index && (
              <div className={styles.answer}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
