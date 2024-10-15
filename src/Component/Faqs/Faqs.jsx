import React, { useState } from "react";
import styles from "./Faqs.module.css";
import { useContext } from "react";
import { HomePageContext } from "../../store/HomePageContext.jsx";
import { AiOutlineArrowDown } from "react-icons/ai";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const faqData = homeScreenDetails?.FAQData || [];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h2>{faqData[0].title}</h2>
      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={() => handleToggle(index)}
          >
            <div className={styles.question}>{item.title}</div>
            <div
              className={`${styles.answer} ${
                activeIndex === index ? styles.showAnswer : ""
              }`}
            >
              {item.description || "No answer provided yet."}
            </div>
          </div>
        ))}

        <button className={styles.arrowButton}>
          <AiOutlineArrowDown size={20} />
        </button>
      </div>
    </div>
  );
};

export default Faqs;
