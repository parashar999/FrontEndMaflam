import React from 'react';
import styles from './TermsAndConditions.module.css';
import { TermsData } from '../../assets/assests';

const TermsAndConditions = () => {
  
 // Access the first (and only) object in the TermsData array
  const terms = TermsData[0];

  return (

    <div className={styles.mainContainer}> 
    <div className={styles.container} >
      <h1 className={styles.title}>{terms.title}</h1>
      <p className={styles.description}>{terms.description}</p>

      {terms.sections.map((section, index) => (
        <div key={index} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.title}</h2>
          <ul className={styles.list}>
            {section.items.map((item, idx) => (
              <li key={idx} className={styles.listItem}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TermsAndConditions;
