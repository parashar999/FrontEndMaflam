// import React, { useState } from 'react';
// import styles from './Faqs.module.css'; 
// import { faqData } from '../../assets/assests';
// import { AiOutlineArrowDown } from "react-icons/ai";



// const Faqs = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleToggle = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className={styles.faqContainer}>
//       <h2>FAQ</h2>
//       <div className={styles.faqList}>
//         {faqData.map((item, index) => (
//           <div 
//             key={index} 
//             className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
//             onClick={() => handleToggle(index)}
//           >
//             <div className={styles.question}>{item.question}</div>
//             {activeIndex === index && (
//               <div className={styles.answer}>{item.answer}</div>
//             )}
//           </div>
//         ))}

//               <button className={styles.arrowButton}>
//                   <AiOutlineArrowDown size={20}  />
//              </button>

//       </div>
//     </div>
//   );
// };

// export default Faqs;


import React, { useState } from 'react';
import styles from './Faqs.module.css'; 
import { faqData } from '../../assets/assests';
import { AiOutlineArrowDown } from "react-icons/ai";

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
            <div className={`${styles.answer} ${activeIndex === index ? styles.showAnswer : ''}`}>
              {item.answer}
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

