
// import React, { useState } from "react";
// import styles from "./FaqsQues.module.css";
// import { faqDataPage } from "../../assets/assests";

// const FaqsQues = () => {
//   const [openTitleIndices, setOpenTitleIndices] = useState([]); 
//   const [openQuestionIndices, setOpenQuestionIndices] = useState([]); 
  

//   const toggleTitle = (index) => {
//     setOpenTitleIndices((prev) => 
//       prev.includes(index) 
//       ? prev.filter((i) => i !== index) 
//       : [...prev, index] 
//     );
//   };

//   const toggleQuestion = (index) => {
//     setOpenQuestionIndices((prev) => 
//       prev.includes(index) 
//       ? prev.filter((i) => i !== index) 
//       : [...prev, index] 
//     );
//   };

//   return (
//     <div className={styles.mainContainers}>
//       <div className={styles.faqContainer}>
//         <h1 className={styles.title}>FAQ</h1>
//         {faqDataPage.map((section, sectionIndex) => (
//           <div key={sectionIndex}>
//             <div
//               className={styles.titleContainer}
//               onClick={() => toggleTitle(sectionIndex)}
//             >
//               <span className={styles.sectionToggleSign}>
//                 {openTitleIndices.includes(sectionIndex) ? "-" : "+"}
//               </span>
//               <h2 className={styles.sectionTitle}>{section.title}</h2>
//             </div>

//             {openTitleIndices.includes(sectionIndex) &&
//               section.faq.map((item, index) => (
//                 <div key={index} className={styles.faqItem}>
//                   <div
//                     className={styles.questionContainer}
//                     onClick={() => toggleQuestion(index)}
//                   >
//                     <span className={styles.questionToggleSign}>
//                       {openQuestionIndices.includes(index) ? "-" : "+"}
//                     </span>
//                     <h3 className={styles.question}>{item.question}</h3>
//                   </div>
//                   <div
//                     className={styles.answer}
//                     style={{
//                       maxHeight: openQuestionIndices.includes(index) ? "200px" : "0px",
//                     }}
//                   >
//                     <p>{item.answer}</p>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FaqsQues;


import React, { useContext, useState } from "react";
import styles from "./FaqsQues.module.css";
import { FaqPageContext } from "../../store/FaqPageContext";
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext"; 

const FaqsQues = () => {
  const [openTitleIndices, setOpenTitleIndices] = useState([]);
  const [openQuestionIndices, setOpenQuestionIndices] = useState([]);
  const { faqScreenDetails, loading, error } = useContext(FaqPageContext);
  const { language } = useContext(LanguageContext); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const isArabic = language === "ar";
  const faqData = faqScreenDetails?.faq || [];
  const faqDataTitle = isArabic 
    ? faqScreenDetails?.faqDataTitle?.titleInArb 
    : faqScreenDetails?.faqDataTitle?.titleInEng;

  const toggleTitle = (index) => {
    setOpenTitleIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleQuestion = (sectionIndex, questionIndex) => {
    const questionKey = `${sectionIndex}-${questionIndex}`;
    setOpenQuestionIndices((prev) =>
      prev.includes(questionKey)
        ? prev.filter((i) => i !== questionKey)
        : [...prev, questionKey]
    );
  };

  return (
    <div className={styles.mainContainers}>
      <div className={styles.faqContainer}>
        <h1 className={styles.title}>{faqDataTitle || "FAQ"}</h1>
        {faqData.map((section, sectionIndex) => {
          const faqs = isArabic ? section.faqInArb : section.faqInEng;

          const hasQuestions = faqs?.some(
            (item) => (isArabic ? item.questionInArb : item.questionInEng)
          );

          return (
            <div key={sectionIndex}>
              <div
                className={styles.titleContainer}
                onClick={() => toggleTitle(sectionIndex)}
              >
                <span className={styles.sectionToggleSign}>
                  {openTitleIndices.includes(sectionIndex) ? "-" : "+"}
                </span>
                <h2 className={styles.sectionTitle}>
                  {isArabic ? section.titleInArb : section.titleInEng}
                </h2>
              </div>

              {openTitleIndices.includes(sectionIndex) && hasQuestions &&
                faqs.map((item, questionIndex) => {
                  const questionText = isArabic ? item.questionInArb : item.questionInEng;
                  if (!questionText) return null;

                  return (
                    <div key={questionIndex} className={styles.faqItem}>
                      <div
                        className={styles.questionContainer}
                        onClick={() => toggleQuestion(sectionIndex, questionIndex)}
                      >
                        <span className={styles.questionToggleSign}>
                          {openQuestionIndices.includes(`${sectionIndex}-${questionIndex}`) ? "-" : "+"}
                        </span>
                        <h3 className={styles.question}>
                          {questionText}
                        </h3>
                      </div>
                      <div
                        className={styles.answer}
                        style={{
                          maxHeight: openQuestionIndices.includes(`${sectionIndex}-${questionIndex}`) ? "200px" : "0px",
                        }}
                      >
                        <p>{isArabic ? item.answerInArb : item.answerInEng}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqsQues;
