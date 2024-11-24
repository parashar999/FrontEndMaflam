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

  // Retrieve lesson data from the formattedCourseData
  const lessonData = filmproductionScreenDetails?.formattedCourseData?.lessions || [];

  // Handle RTL/LTR direction
  const collapsibleClass = direction === 'rtl' ? styles.collapsibleRtl : styles.collapsibleLtr;

  return (
    <div className={styles.maincontainer}>
      <div className={styles.collapsibleLtr}>
        <div className={styles.header}>
          <div 
            onClick={toggleContent} 
            className={styles.toggleButton} 
            style={{ cursor: 'pointer', color: '#39FFFb' ,fontSize:'36px', marginLeft:'10px', marginRight:'10px' }} 
          >
            {isOpen ? '-' : '+'}
          </div>
          <h5 className={styles.toggle}>
            {lessonData[0]?.LessonTitle || 'Course Content'}
          </h5>
          <hr style={{opacity:'0.4'}} className={styles.line} />
        </div>
        {isOpen && (
          <div>
            {lessonData.slice(1).map((item, index) => (
              <QuestionItem 
                key={index} 
                question={item.LessonTitle} 
                objective={item.objective}
                timeStamp={item.SpendToHrs}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const QuestionItem = ({ question, objective, timeStamp }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.questionItem}>
      <div className={styles.questionHeader} onClick={toggleContent}>
        <div className={styles.toggleButton} style={{ cursor: 'pointer', color: '#39FFFb' , fontSize:'16px', marginLeft:'10px', marginRight:'10px' }}>
          {isOpen ? '-' : '+'}
        </div>
        <h6 style={{fontSize:'16px', fontWeight:'700', color:'#5AFFFF', marginBottom:'0px', fontFamily:'Noto Kufi Arabic'}} className={styles.question}>{question}</h6>
      </div>
      {isOpen && (
        <div className={styles.mainAnsTab}>
          <p style={{display:'inline', width:'auto', padding:'0px'}}  className={styles.answer}>
            {/* <strong>Objective:</strong> */}
             {objective}</p>
          <p style={{display:'inline', width:'auto', padding:'0px'}}  className={styles.answer}>
            {/* <strong>Time to Spent</strong> */}
             {timeStamp}</p>
        </div>
      )}
    </div>
  );
};

export default FilmProductionCourseContent;
