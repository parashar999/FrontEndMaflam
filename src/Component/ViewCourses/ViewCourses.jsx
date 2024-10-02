


// import React from 'react';
// import { FaPlayCircle } from 'react-icons/fa';  // Import the play icon
// import styles from './ViewCourses.module.css'; 
// import { CoursesData } from '../../assets/assests'; // Ensure correct import path


// function ViewCourses() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.courseGrid}>
//         {CoursesData.map((course, index) => (
//           <div key={index} className={styles.courseCard}>
//             {course.name}
//           </div>
//         ))}
//       </div>
//       <button className={styles.fullWidthButton}>View All Courses</button>
//       <div className={styles.playButtonContainer}>
//         <button className={styles.playButton}>
//           <FaPlayCircle size={60} />  {/* Customize size as needed */}
//         </button>
//       </div>
//       <div className={styles.textContainer}>
//         <p className={styles.infoText}>Explore the paths and choose the one that's right for you</p>
//       </div>
//     </div>
//   );
// }

// export default ViewCourses;







// import React from 'react';
// import { FaPlayCircle } from 'react-icons/fa';  // Import the play icon
// import styles from './ViewCourses.module.css'; 
// import { CoursesData } from '../../assets/assests'; // Ensure correct import path

// function ViewCourses() {
//   const getCardClassName = (index) => {
//     switch (index) {
//       case 0:
//         return styles.courseCard1;
//       case 1:
//         return styles.courseCard2;
//       case 2:
//         return styles.courseCard3;
//       case 3:
//         return styles.courseCard4;
//       case 4:
//         return styles.courseCard5;
//       case 5:
//         return styles.courseCard6;
//       case 6:
//         return styles.courseCard7;
//       default:
//         return '';
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.courseGrid}>
//         {CoursesData.map((course, index) => (
//           <div
//             key={index}
//             className={`${styles.courseCard} ${getCardClassName(index)}`}
//           >
//             {course.name}
//           </div>
//         ))}
//       </div>
//       <button className={styles.fullWidthButton}>View All Courses</button>
//       <div className={styles.playButtonContainer}>
//         <button className={styles.playButton}>
//           <FaPlayCircle size={60} />  {/* Customize size as needed */}
//         </button>
//       </div>
//       <div className={styles.textContainer}>
//         <p className={styles.infoText}>Explore the paths and choose the one that's right for you</p>
//       </div>
//     </div>
//   );
// }

// export default ViewCourses;




import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';  // Import the play icon
import styles from './ViewCourses.module.css'; 
import { CoursesData } from '../../assets/assests'; // Ensure correct import path

function ViewCourses() {
  const getCardClassName = (index) => {
    return `${styles.courseCard} ${styles[`courseCard--${index + 1}`]}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.courseGrid}>
        {CoursesData.map((course, index) => (
          <div
            key={index}
            className={getCardClassName(index)}
          >
            {course.name}
          </div>
        ))}
      </div>
      <button className={styles.fullWidthButton}>View All Courses</button>
      <div className={styles.playButtonContainer}>
      <svg width="120" height="150" viewBox="0 0 190 189" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Arrow">
<rect x="190" y="188.271" width="190" height="187.543" rx="93.7715" transform="rotate(-180 190 188.271)" fill="white" fill-opacity="0.2"/>
<path id="Vector 46" d="M82.2246 63.6997L123.282 91.1755C125.65 92.7596 125.65 96.24 123.282 97.8241L82.2246 125.3C79.5669 127.079 76 125.174 76 121.976L76 67.024C76 63.826 79.5669 61.9211 82.2246 63.6997Z" stroke="#39FFFB" stroke-width="2.5"/>
</g>
</svg>

      </div>
      <div className={styles.textContainer}>
        <p className={styles.infoText}>Explore the paths and choose the one that's right for you</p>
      </div>
    </div>
  );
}

export default ViewCourses;
