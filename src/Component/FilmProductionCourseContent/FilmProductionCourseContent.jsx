
import React, { useState, useContext } from 'react';
import styles from './FilmProductionCourseContent.module.css';
import { FilmProductionContext } from '../../store/FilmProductionContext'; 
import { LanguageContext } from '../LanguageContext/LanguageContext'; 

const FilmProductionCourseContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { filmproductionScreenDetails, loading, error } = useContext(FilmProductionContext); 
  const { direction } = useContext(LanguageContext); 

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  
  const lessonData = filmproductionScreenDetails?.lessonData || [];

  const collapsibleClass = direction === 'rtl' ? styles.collapsibleRtl : styles.collapsibleLtr;

  return (
    <div className={styles.maincontainer}>
      <div className={collapsibleClass}>
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
