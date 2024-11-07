
import React, { useState, useContext } from 'react';
import styles from './FilmProductionInstructor.module.css';
import { FilmProductionContext } from '../../store/FilmProductionContext';
import { LanguageContext } from '../LanguageContext/LanguageContext'

const FilmProductionInstructor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { filmproductionScreenDetails, loading, error } = useContext(FilmProductionContext);
  const { direction } = useContext(LanguageContext); 

  const toggleContent = () => setIsOpen(!isOpen);

  const instructorData = filmproductionScreenDetails?.instructorData?.[1] ?? null;
  const instructorTitle = filmproductionScreenDetails?.instructorData?.[0]?.title || "About the Instructor";

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
          <h5 className={styles.toggle}>{instructorTitle}</h5>
          <hr className={styles.line} />
        </div>

        {loading && <p>Loading instructor data...</p>}
        {error && <p>Error loading instructor data: {error.message}</p>}

        {isOpen && instructorData && (
          <div className={styles.instructorContent}>
            <h6 className={styles.instructorName}>{instructorData.name}</h6>
            {instructorData.description.map((detail, index) => (
              <p key={index} className={styles.paragraph}>
                {detail}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilmProductionInstructor;
