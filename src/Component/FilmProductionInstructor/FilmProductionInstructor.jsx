

// import React, { useState } from 'react';
// import styles from './FilmProductionInstructor.module.css';
// import {FilmProductionInstructorData } from '../../assets/assests';

// const FilmProductionInstructor = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleContent = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={styles.maincontainer}>
//       <div className={styles.collapsible}>
//         <div className={styles.header}>
//           {/* Toggle button */}
//           <div 
//             onClick={toggleContent} 
//             className={styles.toggleButton} 
//             style={{ cursor: 'pointer', color: '#39FFFb' }}
//           >
//             {isOpen ? '-' : '+'}
//           </div>
//           {/* Title */}
//           <h5 className={styles.toggle}>About the Instructor</h5>
//           <hr className={styles.line} />
//         </div>
//         {/* Content collapses/expands when clicked */}
//         {isOpen && (
//           <div className={styles.instructorContent}>
//             <h6 className={styles.instructorName}>{FilmProductionInstructorData.name}</h6>
//             {/* Render each line of details as separate paragraphs */}
//             {FilmProductionInstructorData.details.map((detail, index) => (
//               <p key={index} className={styles.paragraph}>
//                 {detail}
//               </p>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FilmProductionInstructor;




import React, { useState, useContext } from 'react';
import styles from './FilmProductionInstructor.module.css';
import { FilmProductionContext } from '../../store/FilmProductionContext';

const FilmProductionInstructor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { filmproductionScreenDetails, loading, error } = useContext(FilmProductionContext);

  const toggleContent = () => setIsOpen(!isOpen);

  // Extract instructor data and title, with null checks for safety
  const instructorData = filmproductionScreenDetails?.instructorData?.[1] ?? null;
  const instructorTitle = filmproductionScreenDetails?.instructorData?.[0]?.title || "About the Instructor";

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
          {/* Dynamic title from API or default if unavailable */}
          <h5 className={styles.toggle}>{instructorTitle}</h5>
          <hr className={styles.line} />
        </div>

        {/* Loading and error handling */}
        {loading && <p>Loading instructor data...</p>}
        {error && <p>Error loading instructor data: {error.message}</p>}

        {/* Content collapses/expands when clicked */}
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
