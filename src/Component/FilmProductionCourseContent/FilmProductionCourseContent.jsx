// import React, { useState } from 'react';
// import styles from './FilmProductionCourseContent.module.css';
// import {CourseContentData} from "../../assets/assests"

// const FilmProductionCourseContent = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleContent = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={styles.maincontainer}>
//       <div className={styles.collapsible}>
//         <div className={styles.header}>
//           <div 
//             onClick={toggleContent} 
//             className={styles.toggleButton} 
//             style={{ cursor: 'pointer', color: '#39FFFb' }} 
//           >
//             {isOpen ? '-' : '+'}
//           </div>
//           <h5 className={styles.toggle}>
//             Course Content
//           </h5>
//           <hr className={styles.line} />
//         </div>
//         {isOpen && (
//           <div>
//             {CourseContentData.map((item, index) => (
//               <QuestionItem  key={index} question={item.question} answers={item.answers} timeStamp={item.timeStamp}/>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const QuestionItem = ({ question, answers, timeStamp }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleContent = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={styles.questionItem}>
//       <div className={styles.questionHeader} onClick={toggleContent}>
//         <div className={styles.toggleButton} style={{ cursor: 'pointer', color: '#39FFFb' }}>
//           {isOpen ? '-' : '+'}
//         </div>
//         <h6 className={styles.question}>{question}</h6>
//       </div>
//       {isOpen && (
//         <div className={styles.mainAnsTab}>
//             <div>
//           {answers.map((answer, index) => (
//             <p key={index} className={styles.answer}>{answer}</p>
//           ))}
//             </div>
//             <div>
//             {timeStamp.map((timeStamp, index) => (
//             <p key={index} className={styles.answer}>{timeStamp}</p>
//           ))}
//             </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FilmProductionCourseContent;




import React, { useState, useContext } from 'react';
import styles from './FilmProductionCourseContent.module.css';
import { FilmProductionContext } from '../../store/FilmProductionContext'; // Import the context provider

const FilmProductionCourseContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { filmproductionScreenDetails, loading, error } = useContext(FilmProductionContext); // Access context data

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  // Safely access lesson data with optional chaining
  const lessonData = filmproductionScreenDetails?.lessonData || [];

  return (
    <div className={styles.maincontainer}>
      <div className={styles.collapsible}>
        <div className={styles.header}>
          <div 
            onClick={toggleContent} 
            className={styles.toggleButton} 
            style={{ cursor: 'pointer', color: '#39FFFb' }} 
          >
            {isOpen ? '-' : '+'}
          </div>
          <h5 className={styles.toggle}>
            {lessonData[0]?.title || 'Course Content'}
          </h5>
          <hr className={styles.line} />
        </div>
        {isOpen && (
          <div>
            {/* Map through lessonData to display content */}
            {lessonData.slice(1).map((item, index) => (
              <QuestionItem 
                key={index} 
                question={item.title} 
                answers={item.content.map(contentItem => contentItem.title)} 
                timeStamp={item.content.map(contentItem => contentItem.SpendToHrs)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const QuestionItem = ({ question, answers, timeStamp }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.questionItem}>
      <div className={styles.questionHeader} onClick={toggleContent}>
        <div className={styles.toggleButton} style={{ cursor: 'pointer', color: '#39FFFb' }}>
          {isOpen ? '-' : '+'}
        </div>
        <h6 className={styles.question}>{question}</h6>
      </div>
      {isOpen && (
        <div className={styles.mainAnsTab}>
          <div>
            {answers.map((answer, index) => (
              <p key={index} className={styles.answer}>{answer}</p>
            ))}
          </div>
          <div>
            {timeStamp.map((time, index) => (
              <p key={index} className={styles.answer}>{time}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilmProductionCourseContent;
