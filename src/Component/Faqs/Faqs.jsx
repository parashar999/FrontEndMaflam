import React, { useState, useContext } from "react";
import styles from "./Faqs.module.css";
import stylesArabic from "./FaqsArabic.module.css"; // Assuming you have a similar Arabic CSS file
import { HomePageContext } from "../../store/HomePageContext.jsx";
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-router-dom";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);
  const { language } = useContext(LanguageContext);
  
  // Conditionally select styles based on language
  const stylesSelected = language === "ar" ? stylesArabic : styles;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const faqData = homeScreenDetails?.FAQData || [];
  const faqTitle = homeScreenDetails?.FAQTitle || [];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={stylesSelected.faqContainer}>
      <Link to="/faqs" className={stylesSelected.faqTitle}>
        {faqTitle.title}
      </Link>
      <div className={stylesSelected.faqList}>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`${stylesSelected.faqItem} ${
              activeIndex === index ? stylesSelected.active : ""
            }`}
            onClick={() => handleToggle(index)}
          >
            <div className={stylesSelected.question}> + {item.title}</div>
            <div
              className={`${stylesSelected.answer} ${
                activeIndex === index ? stylesSelected.showAnswer : ""
              }`}
            >
              {item.description || "No answer provided yet."}
            </div>
          </div>
        ))}
        <button className={stylesSelected.arrowButton}>
          <AiOutlineArrowDown size={20} />
        </button>
      </div>
    </div>
  );
};

export default Faqs;
